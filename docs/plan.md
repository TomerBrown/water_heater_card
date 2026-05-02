# water-heater-card — implementation plan

A custom Home Assistant Lovelace card for `water_heater` entities, mushroom-card inspired, optimized for smart electric kettles but graceful for any `water_heater`.

## Goals

- Mushroom-card visual language: shape (icon container) + primary/secondary text + chip row.
- First-class kettle UX: status pill, keep-warm indicator, lift detection, presets (boil/tea/coffee/baby).
- Generic fallback: any HA `water_heater` works using only standard attributes.
- HACS-installable, visual config editor, i18n-ready.

## Non-goals (v1)

- Multi-entity / group cards.
- Energy/usage history charts.
- Vendor pairing flows (handled by integrations, not the card).

## Reference entity

Test target is a Xiaomi Miot Kettle with `supported_features: 1` (target temperature only — no operation modes, no away mode). Two observed snapshots:

| Attribute | A (idle) | B (keep-warm) | C (heating) | D (just boiled) |
| --- | --- | --- | --- | --- |
| `current_temperature` | 93 | 90 | 91 | 99 |
| `temperature` (target) | 99 | 90 | 99 | 99 |
| `min_temp` / `max_temp` | 40 / 99 | 40 / 99 | 40 / 99 | 40 / 99 |
| `kettle.status` | `0` | `4` | `1` | `0` |
| `kettle.fault` | `0` | `0` | `0` | `0` |
| `kettle.auto_keep_warm` | `false` | `true` | `false` | `false` |
| `kettle.keep_warm_temperature` | `100` | `90` | `90` | `90` |
| `function.keep_warm_time` (min) | `120` | `1440` | `1440` | `1440` |
| `function.warming_time` | `0` | `0` | `0` | `0` |
| `function.kettle_lifting` | `false` | `false` | `false` | `false` |
| `function.target_mode` | `0` | `0` | `0` | `0` |
| `function.boil_mode` | `99,1,45,1440` | `99,1,45,1440` | `99,1,45,1440` | `99,1,45,1440` |
| `function.heat_mode` | `70,1,45,1440` | `70,1,45,1440` | `70,1,45,1440` | `70,1,45,1440` |

### Findings

- `kettle.auto_keep_warm` is the cleanest boolean for keep-warm. Use it directly.
- **`kettle.status` enum** (authoritative, from [miot-spec for `xiaomi.kettle.v20`](https://home.miot-spec.com/spec/xiaomi.kettle.v20)):

  | value | meaning |
  | --- | --- |
  | 0 | Idle |
  | 1 | Heating |
  | 2 | Boiling |
  | 3 | Cooling Down |
  | 4 | Keep Warm |

  Observed so far: 0, 1, 4. Values `2` (Boiling) and `3` (Cooling Down) not yet seen — `2` likely fires briefly at the top of a boil cycle; `3` may not be used in this firmware variant.
- **Synthetic `ready` UX state**: vendor reports `Idle` (`0`) both for cold-idle and just-boiled (snapshot A vs D). The card derives `ready` when `status==0 && current >= target - 2°C` for nicer UX, otherwise `idle`.
- `function.warming_time` is `read/notify` only with range `0–720` minutes per spec — so it *can* tick, but stayed `0` across all four snapshots (heating, keep-warm, idle). Likely the integration doesn't poll it, or the firmware only updates it under specific conditions we haven't triggered. Treat as unreliable; rely on optional companion entity for live remaining.
- `kettle.fault` is `uint8` with no documented enum — just a numeric error code. Card displays `Error N` when non-zero; user-visible mapping deferred until we have observed values.
- Spec confirms `function.keep_warm_time` range is `60–1440` minutes (matches snapshots B/C/D).
- `function.keep_warm_time` is the configured duration (minutes). Useful as a "configured for N minutes" hint when no live countdown is wired.
- `function.kettle_lifting` is a clean lift indicator.
- `function.extended_mode` carries vendor presets but uses Chinese labels (温水/泡枸杞/花茶) — ignore; presets come from card config.

### Open questions

1. **Entity `state` value** during boil / keep-warm / idle — needed to decide whether to drive the status pill from `state` or from `kettle.status`. Current bias: prefer `kettle.status` for the Xiaomi adapter (richer), keep `state` as the fallback for the standard adapter.
2. **Power semantics**: does `water_heater.turn_off` actually work on this entity given `supported_features: 1`? If not, "off" is implicit (kettle returns to idle on its own) — hide the power chip when neither service is supported.
3. **`status=2` (Boiling) vs `status=1` (Heating)**: confirm whether `2` is a brief terminal state at the top of a boil cycle, or whether this firmware skips it. The card maps both to "heating" colorwise but the secondary line can show "Boiling" specifically.

## Architecture: thin core + per-vendor adapters

Vendor differences are isolated behind a `WaterHeaterAdapter` interface. Detection by attribute fingerprint with a manual `adapter:` config override.

```ts
// `ready` is derived (current ≈ target after a heat cycle), not from a raw vendor enum.
type Status = "off" | "idle" | "heating" | "keeping_warm" | "ready" | "fault";

interface WaterHeaterAdapter {
  current: number;
  target: number;
  min: number;
  max: number;
  status: Status;
  keepWarm: {
    active: boolean;
    remaining?: Duration;   // from companion entity, if configured
    configured?: Duration;  // from kettle.* / function.* attrs
    holdTemperature?: number;
  };
  lifted?: boolean;
  fault?: string | null;
  setTarget(t: number): ServiceCall;
  turnOn?(): ServiceCall;
  turnOff?(): ServiceCall;
}
```

### Adapters (v1)

- `StandardWaterHeaterAdapter` — fallback for any HA `water_heater`. Uses `state`, `current_temperature`, `temperature`, `min_temp`, `max_temp`, `supported_features`. Maps HA operation states to `Status`.
- `XiaomiMiotKettleAdapter` — detected by presence of `kettle.status`. Maps `kettle.status` enum to `Status`, reads `kettle.auto_keep_warm`, `function.kettle_lifting`, `kettle.keep_warm_temperature`.

### Adapters (later)

Tuya, SmartThings, generic-by-companion-sensors. Same interface, no card changes.

## Layout

Mushroom-style horizontal: shape on left, info column, chip row.

```
┌─────────────────────────────────────────────┐
│  ╭──╮                                        │
│  │🫖│  Xiaomi Miot Kettle                    │
│  ╰──╯  Heating · 93° → 99°                   │
│                                              │
│  [⏻]  [─────●────] 99°  [♨ 1:58]  [⏏ Lifted]│
└─────────────────────────────────────────────┘
```

- **Shape**: circular icon container, color shifts with status:
  - `off` → grey
  - `idle` → grey-blue
  - `heating` → orange (icon: `mdi:kettle-steam`, animated)
  - `keeping_warm` → amber (subtle pulse)
  - `ready` → green
  - `fault` → red
- **Primary line**: friendly name (config override).
- **Secondary line**: status label + `current° → target°`. Localized.
- **Chip row** (each chip optional, hidden when empty/disabled):
  - Power chip — only if `turn_on`/`turn_off` are usable.
  - Target slider — `water_heater.set_temperature`, snaps to preset values.
  - Keep-warm chip — shows remaining (if companion entity) or configured (`Nm`); clickable to toggle if vendor exposes it.
  - Lift warning — visible only when `lifted === true`.
  - Preset chips — from config; tap calls `set_temperature`, optionally `turn_on`.
- **Compact mode** — config option that hides the chip row for dense dashboards.

### States to design for

`available && online` (default), `unavailable`, `fault`, `lifted` (warning overlay), `loading` (initial render before HASS state).

## Config schema

```yaml
type: custom:water-heater-card
entity: water_heater.xiaomi_miot_kettle
icon: mdi:kettle                # auto-picked from adapter when omitted
name: Kitchen Kettle            # optional override of friendly_name
adapter: auto                   # auto | standard | xiaomi_miot
keep_warm_remaining_entity: sensor.kettle_keep_warm_remaining   # optional
presets:
  - { label: Boil,   temperature: 99, icon: mdi:kettle-steam }
  - { label: Tea,    temperature: 80 }
  - { label: Coffee, temperature: 92 }
  - { label: Baby,   temperature: 40 }
show_slider: true
show_presets: true
show_power: true
compact: false
tap_action:    { action: more-info }
hold_action:   { action: none }
double_tap_action: { action: none }
```

Config validation: hand-rolled `setConfig` that throws on missing/invalid `entity`. No external schema lib (keep bundle small).

## Repo structure

```
water-heater-card/
├── package.json
├── tsconfig.json
├── rollup.config.js
├── hacs.json
├── README.md
├── docs/
│   └── plan.md                  ← this file
├── src/
│   ├── water-heater-card.ts     # LitElement, render, action dispatch
│   ├── editor.ts                # visual config editor (HA schema form)
│   ├── types.ts                 # HA + config types
│   ├── const.ts                 # status colors, default presets, icons
│   ├── localize.ts              # i18n loader
│   ├── adapters/
│   │   ├── base.ts              # interface + detection registry
│   │   ├── standard.ts
│   │   └── xiaomi-miot.ts
│   ├── components/
│   │   ├── shape.ts             # mushroom-shape icon container
│   │   ├── chip.ts              # mushroom-chip primitive
│   │   ├── slider.ts            # temp slider with preset snap
│   │   └── keep-warm-chip.ts    # countdown formatting
│   └── styles/
│       └── card.css.ts          # CSS-in-TS via lit
└── translations/
    ├── en.json
    └── he.json
```

## Implementation phases

1. **Scaffold** — TypeScript + Lit + Rollup; HACS-ready `dist/water-heater-card.js`; register `customElements` and `window.customCards`.
2. **Read-only render** — implement `StandardWaterHeaterAdapter` and the layout (shape + info column, no controls). Verifies the abstraction.
3. **Xiaomi adapter** — status enum mapping, lift detection, keep-warm wiring. Needs heating-state observation.
4. **Controls** — slider → `water_heater.set_temperature`; power → `turn_on`/`turn_off`; presets → `set_temperature` (+ optional auto-on).
5. **Visual editor** — schema-form based config UI; required for HACS UX.
6. **Polish** — steam animation, fault/lift overlays, i18n (en + he), README screenshots, HACS submission.

Each phase is independently shippable to a personal dashboard for dogfooding.

## Open decisions to revisit

- **Slider vs +/- chips for target temp** — slider is mushroom-native but +/- is more thumb-friendly on phones. Start with slider; add stepper as alt layout if needed.
- **Auto-on on preset tap** — convenient, but surprising if user just wanted to queue a target. Make it a per-preset config flag (`auto_start: true`).
- **Remaining-time strategy when no companion entity** — show configured duration ("Keep warm: 24h"), or hide the chip entirely? Lean toward showing configured; it's still informative.
