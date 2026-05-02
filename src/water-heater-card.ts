import { LitElement, html, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import type { ActionConfig } from "./types";
import { HassEntity, HomeAssistant, WaterHeaterCardConfig, WaterHeaterUiVariant, WATER_HEATER_UI_VARIANTS } from "./types";
import { registerAdapter, pickAdapter, WaterHeaterAdapter } from "./adapters/base";
import { StandardAdapterFactory } from "./adapters/standard";
import { XiaomiMiotAdapterFactory } from "./adapters/xiaomi-miot";
import { cardStyles } from "./styles/card.css";
import { localize } from "./localize";
import { fireEvent } from "./util/fire-event";

// Register adapters — MIoT must win over standard for Xiaomi kettle-shaped entities
registerAdapter(XiaomiMiotAdapterFactory);
registerAdapter(StandardAdapterFactory);

import "./components/shape";
import "./components/chip";
import "./components/preset-button";
import "./components/slider";

const VERSION = "0.3.4";

function normalizeUiVariant(raw: unknown): WaterHeaterUiVariant {
  const s = String(raw ?? "minimal")
    .toLowerCase()
    .trim()
    .replace(/-/g, "_");
  return (WATER_HEATER_UI_VARIANTS as readonly string[]).includes(s)
    ? (s as WaterHeaterUiVariant)
    : "minimal";
}

console.info(`%cWATER-HEATER-CARD v${VERSION}`, "color: #4fc3f7; font-weight: bold;");

@customElement("water-heater-card")
export class WaterHeaterCard extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;

  @state() private _config?: WaterHeaterCardConfig;

  @property({ reflect: true }) public layout?: string;
  @property({ reflect: true }) public roundness?: string;
  @property({ reflect: true }) public animations?: string;
  @property({ type: Boolean, reflect: true }) public compact?: boolean;

  /** Reflected for CSS variants (`compact`, `comfort`, …). */
  @property({ type: String, reflect: true, attribute: "ui_variant" })
  public uiVariant: WaterHeaterUiVariant = "minimal";

  @state() private _extrasExpanded = false;

  @state() private _actionPending = false;
  /** Snapshot when a service call started — cleared after entity changes or timeout. */
  private _pendingSnapshot?: string;
  private _pendingTimer?: number;

  private _holdTimer?: number;
  private _holdStart?: { clientX: number; clientY: number };
  private _longPressConsumed = false;

  public static async getConfigElement() {
    await import("./editor");
    return document.createElement("water-heater-card-editor");
  }

  public static getStubConfig(hass: HomeAssistant): Partial<WaterHeaterCardConfig> {
    const entities = Object.keys(hass.states);
    const waterHeaters = entities.filter((e) => e.startsWith("water_heater."));
    return {
      entity: waterHeaters[0] || "",
    };
  }

  public setConfig(config: WaterHeaterCardConfig): void {
    if (!config.entity) {
      throw new Error("You need to define an entity");
    }

    const merged = {
      ...config,
      type: "custom:water-heater-card" as const,
      hold_action: config.hold_action ?? { action: "more-info" as const, entity: config.entity },
      show_slider: config.show_slider ?? true,
      show_presets: config.show_presets ?? true,
      show_power: config.show_power ?? true,
      collapse_controls: config.collapse_controls ?? true,
      controls_expanded: config.controls_expanded ?? false,
      compact: config.compact ?? false,
      ui_variant: normalizeUiVariant(config.ui_variant),
    };

    merged.hold_ms =
      typeof merged.hold_ms === "number" && merged.hold_ms >= 200 && merged.hold_ms <= 5000
        ? merged.hold_ms
        : 550;

    this._config = merged as WaterHeaterCardConfig;
    this._extrasExpanded = this._config.controls_expanded === true;
    this.uiVariant = this._config.ui_variant!;

    if (this._config.layout) this.layout = this._config.layout;
    else this.removeAttribute("layout");

    if (this._config.roundness) this.roundness = this._config.roundness;
    else this.removeAttribute("roundness");

    if (this._config.animations === false) this.animations = "false";
    else this.removeAttribute("animations");

    this.compact = !!this._config.compact;
  }

  disconnectedCallback(): void {
    this._clearHoldTimer();
    this._clearPendingTimers();
    super.disconnectedCallback();
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this._config || !this.hass) return false;
    if (changedProps.has("_config")) return true;

    const oldHass = changedProps.get("hass") as HomeAssistant | undefined;
    if (!oldHass) return true;

    if (oldHass.states[this._config.entity] !== this.hass.states[this._config.entity]) {
      return true;
    }

    if (
      this._config.keep_warm_remaining_entity &&
      oldHass.states[this._config.keep_warm_remaining_entity] !==
        this.hass.states[this._config.keep_warm_remaining_entity]
    ) {
      return true;
    }

    return false;
  }

  protected updated(_changedProps: PropertyValues): void {
    super.updated(_changedProps);

    const themeVars = [
      "--whc-color-heating",
      "--whc-color-keeping_warm",
      "--whc-color-off",
      "--whc-color-idle",
      "--whc-color-ready",
      "--whc-color-fault",
    ] as const;
    themeVars.forEach((v) => this.style.removeProperty(v));

    const tc = this._config?.theme_colors;
    if (tc) {
      const apply = (hex: string | undefined, cssVar: (typeof themeVars)[number]): void => {
        if (hex) this.style.setProperty(cssVar, hex);
      };
      apply(tc.heating, "--whc-color-heating");
      apply(tc.keeping_warm, "--whc-color-keeping_warm");
      apply(tc.off, "--whc-color-off");
      apply(tc.idle, "--whc-color-idle");
      apply(tc.ready, "--whc-color-ready");
      apply(tc.fault, "--whc-color-fault");
    }

    this._maybeClearPendingFromEntity();
    this.toggleAttribute("data-pending", this._actionPending);
  }

  static get styles() {
    return cardStyles;
  }

  private _clearHoldTimer(): void {
    if (this._holdTimer !== undefined) {
      window.clearTimeout(this._holdTimer);
      this._holdTimer = undefined;
    }
    this._holdStart = undefined;
  }

  private _clearPendingTimers(): void {
    if (this._pendingTimer !== undefined) {
      window.clearTimeout(this._pendingTimer);
      this._pendingTimer = undefined;
    }
  }

  /** JSON snapshot of fields that move when the kettle obeys a command. */
  private _entityReactiveSignature(ent: HassEntity | undefined): string {
    if (!ent) return "";
    const a = ent.attributes ?? {};
    const bits: Record<string, unknown> = {
      st: ent.state,
      tp: a.temperature,
      ct: a.current_temperature,
      ks: a["kettle.status"],
      kaw: a["kettle.auto_keep_warm"],
      kwt: a["function.keep_warm_time"],
      kf: a["kettle.fault"],
    };
    return JSON.stringify(bits);
  }

  private _pendingContextSignature(): string {
    const cfg = this._config;
    const hass = this.hass;
    if (!cfg || !hass) return "";
    const main = this._entityReactiveSignature(hass.states[cfg.entity]);
    if (!cfg.keep_warm_remaining_entity) return main;
    const k = hass.states[cfg.keep_warm_remaining_entity];
    return `${main}|kw:${k?.state ?? ""}`;
  }

  private _beginPending(): void {
    this._pendingSnapshot = this._pendingContextSignature();
    this._clearPendingTimers();
    this._actionPending = true;
    /* ~34s cap (was 24s): slow entities keep “Updating…” until state moves or timeout. */
    this._pendingTimer = window.setTimeout(() => {
      this._pendingTimer = undefined;
      this._pendingSnapshot = undefined;
      this._actionPending = false;
    }, 34000);
  }

  private _maybeClearPendingFromEntity(): void {
    if (!this._actionPending || this._pendingSnapshot === undefined || !this._config || !this.hass) return;
    const next = this._pendingContextSignature();
    if (next !== this._pendingSnapshot) {
      this._clearPendingTimers();
      this._pendingSnapshot = undefined;
      this._actionPending = false;
    }
  }

  private _isHoldCancelledByMovement(ev: PointerEvent): boolean {
    if (!this._holdStart || this._holdTimer === undefined) return false;
    const dx = ev.clientX - this._holdStart.clientX;
    const dy = ev.clientY - this._holdStart.clientY;
    return dx * dx + dy * dy > 100;
  }

  /** Skip long-press when the gesture started on sliders, chips, presets, etc. */
  private _composedPathTouchesInteractive(ev: PointerEvent): boolean {
    const path = ev.composedPath();
    for (let i = 0; i < path.length; i++) {
      const node = path[i];
      if (node === ev.currentTarget) break;
      if (!(node instanceof Element)) continue;
      const t = node.tagName;
      if (
        t === "BUTTON" ||
        t === "INPUT" ||
        t === "SELECT" ||
        t === "TEXTAREA" ||
        t === "WHC-PRESET-BUTTON" ||
        t === "WHC-CHIP" ||
        t === "WHC-SLIDER" ||
        t === "WHC-SHAPE"
      )
        return true;
      const el = node as HTMLElement & { closest?: (s: string) => HTMLElement | null };
      if (
        el.closest?.(
          "button,input,select,textarea,whc-preset-button,whc-chip,whc-slider,whc-shape",
        )
      )
        return true;
    }
    return false;
  }

  private _cardPointerDown(ev: PointerEvent): void {
    this._clearHoldTimer();
    this._longPressConsumed = false;
    if (ev.pointerType === "mouse" && ev.button !== 0) return;
    if (!this.hass || !this._config) return;
    if (this._composedPathTouchesInteractive(ev)) return;

    const holdMs =
      typeof this._config.hold_ms === "number" && this._config.hold_ms >= 200 && this._config.hold_ms <= 5000
        ? this._config.hold_ms
        : 550;

    this._holdStart = { clientX: ev.clientX, clientY: ev.clientY };
    this._holdTimer = window.setTimeout(() => {
      this._holdTimer = undefined;
      this._holdStart = undefined;
      void this._runHoldAction().then(() => {
        this._longPressConsumed = true;
      });
    }, holdMs);
  }

  private _cardPointerMove(ev: PointerEvent): void {
    if (this._isHoldCancelledByMovement(ev)) this._clearHoldTimer();
  }

  private _cardPointerEnd(ev: PointerEvent): void {
    const consumed = this._longPressConsumed;
    this._clearHoldTimer();
    if (consumed) {
      ev.preventDefault();
      this._longPressConsumed = false;
    }
  }

  private async _runHoldAction(): Promise<void> {
    const cfg = this._config;
    const hass = this.hass;
    if (!cfg || !hass) return;

    const act: ActionConfig = cfg.hold_action ?? { action: "more-info", entity: cfg.entity };

    if (act.action === "none") return;

    if (act.action === "more-info") {
      fireEvent(this, "hass-more-info", {
        entityId: act.entity ?? cfg.entity,
      });
      return;
    }

    if (act.action === "toggle") {
      this._beginPending();
      await hass.callService("homeassistant", "toggle", {
        entity_id: act.entity ?? cfg.entity,
      });
      await this._refreshTrackedEntities();
      return;
    }

    if (act.action === "call-service") {
      const parts = act.service.split(".").filter(Boolean);
      if (parts.length >= 2) {
        const domain = parts.shift()!;
        const svc = parts.join(".");
        this._beginPending();
        await hass.callService(domain, svc, act.service_data ?? {}).catch(() => {});
        await this._refreshTrackedEntities();
      }
      return;
    }

    /* navigate/url/doubletap-style actions could be wired later via fireEvent parity */
  }

  private async _refreshTrackedEntities(): Promise<void> {
    const hass = this.hass;
    const cfg = this._config;
    if (!hass || !cfg) return;
    const ids = [cfg.entity];
    if (cfg.keep_warm_remaining_entity) ids.push(cfg.keep_warm_remaining_entity);
    for (const entity_id of ids) {
      await hass.callService("homeassistant", "update_entity", { entity_id }).catch(() => {});
    }
  }

  private async _callServiceWithRefresh(serviceCall: {
    domain: string;
    service: string;
    serviceData?: Record<string, unknown>;
  }): Promise<void> {
    const hass = this.hass;
    if (!hass || !serviceCall?.domain || !serviceCall?.service) return;
    this._beginPending();
    await hass.callService(serviceCall.domain, serviceCall.service, serviceCall.serviceData).catch(() => {});
    await this._refreshTrackedEntities();
  }

  protected render() {
    if (!this._config || !this.hass) return html``;

    const entityId = this._config.entity;
    const entity = this.hass.states[entityId];

    if (!entity) {
      return html`
        <ha-card>
          <div class="card">
            <div class="secondary">Entity not found: ${entityId}</div>
          </div>
        </ha-card>
      `;
    }

    if (entity.state === "unavailable") {
      return html`
        <ha-card class="unavailable">
          <div class="card">
            <div class="header-row">
              <whc-shape status="off" .icon=${this._config.icon}></whc-shape>
              <div class="info">
                <div class="primary">${this._config.name || entity.attributes.friendly_name || entityId}</div>
                <div class="secondary">${localize("state.unavailable", this.hass.locale?.language)}</div>
              </div>
            </div>
          </div>
        </ha-card>
      `;
    }

    const adapterFactory = pickAdapter(entity, this._config.adapter);
    const keepWarmRemainingEntity = this._config.keep_warm_remaining_entity
      ? this.hass.states[this._config.keep_warm_remaining_entity]
      : undefined;

    const adapter: WaterHeaterAdapter = adapterFactory.build(entity, {
      hass: this.hass,
      keepWarmRemainingEntity,
    });

    const name = this._config.name || entity.attributes.friendly_name || entityId;
    const statusLabel = localize(`status.${adapter.status}`, this.hass.locale?.language);

    let secondaryText = statusLabel;
    if (adapter.status === "keeping_warm") {
      const remainingMin = adapter.keepWarm.remaining?.minutes;
      const configuredMin = adapter.keepWarm.configured?.minutes;
      if (remainingMin !== undefined && remainingMin !== null && !Number.isNaN(Number(remainingMin))) {
        secondaryText = `${statusLabel} · ${remainingMin}m left`;
      } else if (configuredMin !== undefined && configuredMin !== null) {
        secondaryText = `${statusLabel} · ${configuredMin}m`;
      }
    }

    const inlineStyles: Record<string, string> = {};
    const stateClass = `state--${adapter.status}`;

    let progress = 0;
    if (adapter.status === "heating") {
      progress = Math.min(100, Math.max(0, (adapter.current / adapter.target) * 100));
    } else if (adapter.status === "keeping_warm") {
      progress = 100;
    }

    const tempPresets = this._config.temp_presets || [60, 70, 80, 90, 100];
    const keepWarmPresets = this._config.keep_warm_presets || [
      { label: "Off", value: 0 },
      { label: "15m", value: 15 },
      { label: "30m", value: 30 },
      { label: "45m", value: 45 },
      { label: "1h", value: 60 },
    ];

    const showPresets = this._config.show_presets !== false;
    const showSlider = this._config.show_slider !== false;

    const activelyOn =
      adapter.status === "heating" ||
      adapter.status === "keeping_warm" ||
      adapter.status === "ready";

    const showOffChip = !!(adapter.turnOff && activelyOn);
    const showPower = this._config.show_power !== false && !!(adapter.turnOff || adapter.turnOn);

    const canShapeStart =
      !!adapter.turnOn &&
      !activelyOn &&
      (adapter.status === "off" || adapter.status === "idle" || adapter.status === "fault");

    const ui = normalizeUiVariant(this._config.ui_variant);
    const collapseControls = ui === "full" ? false : this._config.collapse_controls !== false;
    const chipsFirst = ui === "chips_first";
    const showFocusTargetRow = ui === "focus_target";

    const lang = this.hass.locale?.language;

    const secondaryLine = this._actionPending
      ? localize("state.pending", lang)
      : secondaryText;

    const offBlock =
      showPower && showOffChip && adapter.turnOff
        ? html`
            <div class="power-row">
              <whc-chip
                .label=${localize("chip.turn_off", lang)}
                .icon=${"mdi:power-plug-off"}
                @click=${(e: Event) => {
                  e.stopPropagation();
                  void this._callServiceWithRefresh(adapter.turnOff!());
                }}
              ></whc-chip>
            </div>
          `
        : html``;

    const sliderBlock = showSlider
      ? html`
          <div class="control-section">
            <whc-slider
              .value=${adapter.target}
              .min=${adapter.min}
              .max=${adapter.max}
              .step=${1}
              @value-changed=${(ev: CustomEvent<{ value: number }>) => {
                ev.stopPropagation();
                void this._callServiceWithRefresh(adapter.setTarget(ev.detail.value));
              }}
            ></whc-slider>
          </div>
        `
      : html``;

    const tempPresetBlock =
      showPresets && tempPresets.length > 0
        ? html`
            <div class="control-section">
              <div class="preset-row">
                ${tempPresets.map(
                  (temp: number) => html`
                    <whc-preset-button
                      .label="${temp}°"
                      .active=${adapter.target === temp}
                      ?active=${adapter.target === temp}
                      .color="var(--whc-state-color)"
                      @click=${(e: Event) => {
                        e.stopPropagation();
                        void this._callServiceWithRefresh(adapter.setTarget(temp));
                      }}
                    ></whc-preset-button>
                  `,
                )}
              </div>
            </div>
          `
        : html``;

    const keepWarmBlock =
      showPresets && keepWarmPresets.length > 0
        ? html`
            <div class="control-section">
              <div class="section-label">${localize("section.keep_warm", lang)}</div>
              <div class="preset-row">
                ${keepWarmPresets.map((preset: { label: string; value: number }) => {
                  const isActive =
                    adapter.keepWarm.active && adapter.keepWarm.configured?.minutes === preset.value;
                  return html`
                    <whc-preset-button
                      .label="${preset.label}"
                      .active=${isActive}
                      ?active=${isActive}
                      .color="var(--whc-state-color)"
                      @click=${(e: Event) => {
                        e.stopPropagation();
                        if (preset.value === 0 && adapter.turnOff)
                          void this._callServiceWithRefresh(adapter.turnOff());
                        else if (adapter.setKeepWarmMinutes)
                          void this._callServiceWithRefresh(adapter.setKeepWarmMinutes(preset.value));
                      }}
                    ></whc-preset-button>
                  `;
                })}
              </div>
            </div>
          `
        : html``;

    const hasAnyCore = !!(showSlider || showPresets || (showPower && showOffChip));

    const panelInner = chipsFirst ? html`${offBlock}${sliderBlock}${keepWarmBlock}` : html`${offBlock}${sliderBlock}${tempPresetBlock}${keepWarmBlock}`;

    const hasPanelSections = chipsFirst
      ? !!( (showPower && showOffChip) || showSlider || (showPresets && keepWarmPresets.length > 0) )
      : hasAnyCore;

    const showOutsideTempRow = !!(chipsFirst && showPresets && tempPresets.length > 0);

    const expandShellWanted = collapseControls && hasPanelSections;

    const expandableBlock = expandShellWanted
      ? html`
          <div class="extras-wrap">
            <button
              type="button"
              class="extras-toggle"
              aria-expanded=${this._extrasExpanded}
              @click=${(ev: Event) => {
                ev.stopPropagation();
                this._extrasExpanded = !this._extrasExpanded;
              }}
            >
              <span>${localize("panel.expand_controls", lang)}</span>
              <ha-icon
                class="extras-chevron ${this._extrasExpanded ? "open" : ""}"
                icon="mdi:chevron-down"
              ></ha-icon>
            </button>
            ${this._extrasExpanded ? html`<div class="extras-panel">${panelInner}</div>` : ""}
          </div>
        `
      : html``;

    const stackedInline =
      !collapseControls && hasAnyCore
        ? html`
            <div class="extras-inline">
              ${chipsFirst ? html`${tempPresetBlock}${panelInner}` : panelInner}
            </div>
          `
        : html``;

    const focusRow =
      showFocusTargetRow && hasAnyCore
        ? html`
            <div class="focus-target-row" aria-live="polite">
              <span class="focus-target-label">${localize("panel.heating_toward", lang)}</span>
              <span class="focus-target-value">${adapter.target}°</span>
            </div>
          `
        : html``;

    const outsideTempPlacement = collapseControls && showOutsideTempRow ? tempPresetBlock : html``;

    return html`
      <ha-card
        style=${styleMap(inlineStyles)}
        class=${classMap({ [stateClass]: true, "whc-card--pending": this._actionPending })}
        aria-busy=${this._actionPending ? "true" : "false"}
        @pointerdown=${this._cardPointerDown}
        @pointermove=${this._cardPointerMove}
        @pointerup=${this._cardPointerEnd}
        @pointercancel=${this._cardPointerEnd}
      >
        <div class="card">
          <div class="header-row">
            <whc-shape
              .status=${adapter.status}
              .progress=${progress}
              .icon=${this._config.icon}
              .clickable=${canShapeStart}
              aria-label=${ifDefined(canShapeStart ? localize("aria.shape_start", lang) : undefined)}
              @pointerdown=${(ev: PointerEvent) => {
                if (canShapeStart) ev.stopPropagation();
              }}
              @click=${() => {
                if (!canShapeStart || !adapter.turnOn) return;
                void this._callServiceWithRefresh(adapter.turnOn());
              }}
            ></whc-shape>

            <div class="header-center">
              <div class="info">
                <div class="primary">${name}</div>
                <div class=${classMap({ secondary: true, "secondary--pending": this._actionPending })}>
                  ${secondaryLine}
                </div>
              </div>

              ${adapter.status === "heating" || adapter.status === "keeping_warm"
                ? html`
                    <div class="temp-display" aria-live="polite">
                      <span class="temp-current">${adapter.current}°</span>
                      ${adapter.status === "keeping_warm"
                        ? ""
                        : html`<span class="temp-target">/ ${adapter.target}°</span>`}
                    </div>
                  `
                : html`
                    <div class="temp-display temp-display--ambient" aria-live="polite">
                      <span class="temp-current--ambient">${adapter.current}°</span>
                    </div>
                  `}
            </div>
          </div>

          ${focusRow}
          ${outsideTempPlacement}
          ${expandableBlock}
          ${stackedInline}
        </div>
      </ha-card>
    `;
  }
}

declare global {
  interface Window {
    customCards?: unknown[];
  }
}

window.customCards = window.customCards ?? [];
window.customCards.push({
  type: "water-heater-card",
  name: "Water Heater Card",
  description: "Mushroom-inspired card for water_heater entities",
  preview: false,
});
