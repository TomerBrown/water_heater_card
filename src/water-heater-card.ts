import { LitElement, html, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { HomeAssistant, WaterHeaterCardConfig } from "./types";
import { registerAdapter, pickAdapter, WaterHeaterAdapter } from "./adapters/base";
import { StandardAdapterFactory } from "./adapters/standard";
import { XiaomiMiotAdapterFactory } from "./adapters/xiaomi-miot";
import { cardStyles } from "./styles/card.css";
import { localize } from "./localize";

// Register adapters — MIoT must win over standard for Xiaomi kettle-shaped entities
registerAdapter(XiaomiMiotAdapterFactory);
registerAdapter(StandardAdapterFactory);

// Import components to register them
import "./components/shape";
import "./components/chip";
import "./components/preset-button";

const VERSION = "0.2.0";

console.info(`%cWATER-HEATER-CARD v${VERSION}`, "color: #4fc3f7; font-weight: bold;");

@customElement("water-heater-card")
export class WaterHeaterCard extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;

  @state() private _config?: WaterHeaterCardConfig;

  @property({ reflect: true }) public layout?: string;
  @property({ reflect: true }) public roundness?: string;
  @property({ reflect: true }) public animations?: string;

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
    this._config = {
      show_slider: true,
      show_presets: true,
      show_power: true,
      ...config,
    };
    
    // Reflect layout/styling properties to host for CSS
    if (this._config.layout) this.layout = this._config.layout;
    else this.removeAttribute('layout');

    if (this._config.roundness) this.roundness = this._config.roundness;
    else this.removeAttribute('roundness');

    if (this._config.animations === false) this.animations = "false";
    else this.removeAttribute('animations');
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this._config || !this.hass) return false;
    if (changedProps.has("_config")) return true;

    const oldHass = changedProps.get("hass") as HomeAssistant | undefined;
    if (!oldHass) return true;

    // Only update if the entity or companion entity state changed
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
    if (!tc) return;

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

  static get styles() {
    return cardStyles;
  }

  private _handleAction(e: CustomEvent<{ action: string }>) {
    console.log("Action handled:", e.detail.action);
  }

  private _callService(serviceCall: any) {
    if (!this.hass || !serviceCall) return;
    this.hass.callService(serviceCall.domain, serviceCall.service, serviceCall.serviceData);
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
    
    // Calculate progress for the ring
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
      { label: "1h", value: 60 }
    ];

    return html`
      <ha-card style=${styleMap(inlineStyles)} class=${stateClass}>
        <div class="card">
          <div class="header-row">
            <whc-shape
              .status=${adapter.status}
              .progress=${progress}
              .icon=${this._config.icon}
              @click=${() => this._handleAction(new CustomEvent("action", { detail: { action: "tap" } }))}
            ></whc-shape>

            <div class="header-center">
              <div class="info">
                <div class="primary">${name}</div>
                <div class="secondary">${secondaryText}</div>
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
                : ""}
            </div>

            <div class="menu">
              <ha-icon .icon=${"mdi:dots-vertical"} @click=${() => this._handleAction(new CustomEvent("action", { detail: { action: "hold" } }))}></ha-icon>
            </div>
          </div>

          <div class="control-section">
            <div class="preset-row">
              ${html`
                ${tempPresets.map(
                  (temp: number) => html`
                    <whc-preset-button
                      .label="${temp}°"
                      .active=${adapter.target === temp}
                      ?active=${adapter.target === temp}
                      .color="var(--whc-state-color)"
                      @click=${() => this._callService(adapter.setTarget(temp))}
                    ></whc-preset-button>
                  `,
                )}
              `}
            </div>
          </div>

          <div class="control-section">
            <div class="section-label">Keep warm</div>
            <div class="preset-row">
              ${html`
                ${keepWarmPresets.map((preset: { label: string; value: number }) => {
                  const isActive =
                    adapter.keepWarm.active && adapter.keepWarm.configured?.minutes === preset.value;
                  return html`
                    <whc-preset-button
                      .label="${preset.label}"
                      .active=${isActive}
                      ?active=${isActive}
                      .color="var(--whc-state-color)"
                      @click=${() => {
                        if (preset.value === 0 && adapter.turnOff) {
                          this._callService(adapter.turnOff());
                        } else if (adapter.setKeepWarmMinutes) {
                          this._callService(adapter.setKeepWarmMinutes(preset.value));
                        }
                      }}
                    ></whc-preset-button>
                  `;
                })}
              `}
            </div>
          </div>
        </div>
      </ha-card>
    `;
  }
}

declare global {
  interface Window {
    customCards?: any[];
  }
}

window.customCards = window.customCards ?? [];
window.customCards.push({
  type: "water-heater-card",
  name: "Water Heater Card",
  description: "Mushroom-inspired card for water_heater entities",
  preview: false,
});
