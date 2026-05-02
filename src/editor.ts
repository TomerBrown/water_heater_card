import { LitElement, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant } from "./types";
import { WaterHeaterCardConfig } from "./types";

const SCHEMA = [
  { name: "entity", selector: { entity: { domain: "water_heater" } } },
  {
    name: "ui_variant",
    selector: {
      select: {
        options: [
          { value: "minimal", label: "Minimal — collapsible panel" },
          { value: "full", label: "Full — always show controls" },
          { value: "compact", label: "Compact — tighter spacing & type" },
          { value: "comfort", label: "Comfort — larger tap targets & padding" },
          { value: "focus_target", label: "Focus target — hero target row + panel" },
          { value: "chips_first", label: "Chips first — temp presets outside panel" },
        ],
      },
    },
  },
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

  private _computeLabel(schema: { name?: string }): string {
    switch (schema.name) {
      case "entity":
        return "Water heater entity";
      case "ui_variant":
        return "UI variant";
      case "name":
        return "Card name";
      case "icon":
        return "Icon";
      case "adapter":
        return "Adapter";
      case "keep_warm_remaining_entity":
        return "Keep-warm timer entity (optional)";
      case "show_slider":
        return "Show temperature slider";
      case "show_presets":
        return "Show preset rows";
      case "show_power":
        return "Show stop / power (in panel)";
      case "compact":
        return "Compact (legacy)";
      default:
        return schema.name ?? "";
    }
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
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }
}
