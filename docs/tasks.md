# tasks

Implementation TODO derived from `docs/plan.md`. Tasks are grouped into dependency tiers (`T0`…`T4`); within a tier, tasks are independent and can run in parallel.

Critical path: **T0 → T1c → T2a → T3a → T3b → T4a/T4b** (~6 sequential steps). Everything else fans out around it.

---

## T0 — Scaffold (blocks everything)

- [x] **T0. Scaffold build & HACS skeleton**
  Create `package.json`, `tsconfig.json`, `rollup.config.js`, `hacs.json`. Set up Lit + TypeScript build emitting `dist/water-heater-card.js`. Add minimal `src/water-heater-card.ts` that registers the custom element and pushes onto `window.customCards`.

## T1 — Foundations (parallel after T0)

- [x] **T1a. types.ts** — HassEntity-ish types, `WaterHeaterCardConfig` (entity, icon, name, adapter, keep_warm_remaining_entity, presets, show_*, compact, *_action).
- [x] **T1b. const.ts** — Status→color map (off/idle/heating/keeping_warm/ready/fault), default icons (`mdi:kettle`, `mdi:kettle-steam`), default preset list (Boil/Tea/Coffee/Baby).
- [x] **T1c. adapters/base.ts** — `Status` union, `WaterHeaterAdapter` interface, registry with attribute-fingerprint detection + manual `adapter:` override (`auto|standard|xiaomi_miot`). No adapter implementations yet.
- [x] **T1d. styles/card.css.ts** — Mushroom-style horizontal layout: shape on left, info column, chip row. CSS variables for status colors. Compact-mode rule.
- [x] **T1e. i18n loader + translations** — `localize.ts` keyed off `hass.locale`; `translations/en.json` and `translations/he.json` with status labels, chip labels, error strings.

## T2 — Adapters & components (parallel after T1)

- [x] **T2a. StandardWaterHeaterAdapter** — Reads `state`, `current_temperature`, `temperature`, `min_temp`, `max_temp`, `supported_features`. Maps HA operation states → `Status`. Wires `set_temperature`/`turn_on`/`turn_off` when feature bits allow. _Depends on T1a, T1c._
- [x] **T2b. XiaomiMiotKettleAdapter** — Detect via `kettle.status` presence. Map enum `{0:idle, 1:heating, 2:boiling→heating, 3:cooling_down→idle, 4:keeping_warm}`. Derive `ready` when `status==0 && current >= target-2`. Read `kettle.auto_keep_warm`, `function.kettle_lifting`, `kettle.keep_warm_temperature`, `function.keep_warm_time`. Map `kettle.fault!=0 → fault`. _Depends on T1a, T1c._
- [x] **T2c. components/shape.ts** — Circular icon container, color via CSS var bound to status. _Depends on T1b, T1d._
- [x] **T2d. components/chip.ts** — Mushroom-style chip primitive (icon + label + tap), used by power/lift/preset. _Depends on T1d._
- [x] **T2e. components/slider.ts** — Range slider min..max, snaps to preset values, fires on change. _Depends on T1a, T1d._
- [x] **T2f. components/keep-warm-chip.ts** — Renders remaining (companion entity) when present, else configured duration ("24h"). Click toggles keep-warm if adapter exposes it. _Depends on T1d._

## T3 — Composition

- [x] **T3a. Card read-only render** — `water-heater-card.ts`: `setConfig` validation (throws on missing/invalid entity), pick adapter, render shape + primary/secondary line ("Heating · 93° → 99°"). **Phase-2 milestone — dogfoodable.** _Depends on T2a, T2c, T1e._
- [x] **T3b. Wire chip row + actions** — Compose power chip (gated on `turn_on`/`turn_off`), slider (`set_temperature`), keep-warm chip, lift warning (`lifted===true`), preset chips (`set_temperature` + optional `auto_start`). Tap/hold/double_tap dispatch. `compact:` hides chip row. _Depends on T3a, T2d, T2e, T2f, T2b._
- [x] **T3c. Visual config editor (editor.ts)** — HA schema-form editor: entity picker, name/icon, adapter dropdown, `keep_warm_remaining_entity` picker, presets list editor, `show_*` toggles, `compact`, action editors. Required for HACS UX. **Can develop in parallel with T3a/T3b once T1a is done.** _Depends on T1a._

## T4 — Polish & ship (parallel after T3b)

- [x] **T4a. Polish: animations & overlays** — Animated steam icon during heating, subtle pulse during keep-warm, red fault overlay (`Error N`), lift warning overlay, loading skeleton before HASS state, unavailable styling.
- [ ] **T4b. README + screenshots + HACS submission** — README with config schema, screenshots of all states, HACS install instructions, submit to default repo.
- [ ] **T4c. Resolve plan.md open questions via dogfooding** — Capture during real-device use: (1) entity `state` values during boil/keep-warm/idle (confirm Xiaomi adapter prefers `kettle.status` over `state`); (2) whether `water_heater.turn_off` works on `supported_features:1` (else hide power chip); (3) whether `status=2` (Boiling) actually fires, and for how long. Update `plan.md` when answered. _Can run anytime after T3a is on a real dashboard._
- [ ] **T4d. Resolve open decisions** — After dogfooding T3b: decide slider vs +/- stepper (add stepper layout if slider feels wrong on phone), confirm per-preset `auto_start` flag default, confirm "show configured duration" when no companion entity is the right call. Update `plan.md`.

---

## Dependency graph

```
T0
 ├── T1a ─┬─ T2a ─┐
 │       ├─ T2b ─┤
 │       └─ T2e ─┤
 │       T3c ←───┘ (editor — only needs T1a)
 ├── T1b ─┬─ T2c
 ├── T1c ─┴─ T2a, T2b
 ├── T1d ──── T2c, T2d, T2e, T2f
 └── T1e ──── T3a

T2a + T2c + T1e ──→ T3a ──→ T3b ──→ T4a, T4b, T4c, T4d
T2b + T2d + T2e + T2f ─────────↗
```
