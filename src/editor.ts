import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant } from "./types";
import { WaterHeaterCardConfig } from "./types";

const SCHEMA = [
  { name: "entity", selector: { entity: { domain: "water_heater" } } },
  { name: "name", selector: { text: {} } },
  { name: "icon", selector: { icon: {} } },
  {
    name: "adapter",
    selector: {
      select: {
        options: [
          { value: "auto", label: "Auto" },
          { value: "standard", label: "Standard" },
          { value: "xiaomi_miot", label: "Xiaomi MIoT" },
        ],
      },
    },
  },
  {
    name: "keep_warm_remaining_entity",
    selector: { entity: { domain: "sensor" } },
  },
  {
    type: "grid",
    name: "",
    schema: [
      { name: "show_slider", selector: { boolean: {} } },
      { name: "show_presets", selector: { boolean: {} } },
      { name: "show_power", selector: { boolean: {} } },
      { name: "compact", selector: { boolean: {} } },
    ],
  },
];

@customElement("water-heater-card-editor")
export class WaterHeaterCardEditor extends LitElement {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: WaterHeaterCardConfig;

  public setConfig(config: WaterHeaterCardConfig): void {
    this._config = config;
  }

  private _valueChanged(ev: CustomEvent): void {
    const config = ev.detail.value;
    this.dispatchEvent(
      new CustomEvent("config-changed", { detail: { config } })
    );
  }

  protected render() {
    if (!this.hass || !this._config) return html``;

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${SCHEMA}
        .computeLabel=${(s: any) => s.name}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }
}
