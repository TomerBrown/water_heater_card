import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { KeepWarmInfo } from "../adapters/base";
import { localize } from "../localize";

@customElement("whc-keep-warm-chip")
export class KeepWarmChip extends LitElement {
  @property({ attribute: false }) public info?: KeepWarmInfo;
  @property() public language?: string;

  static styles = css`
    :host {
      display: inline-block;
    }

    whc-chip {
      --chip-background-color: rgba(255, 179, 0, 0.12);
      color: #ffb300;
    }

    whc-chip.active {
      --chip-background-color: rgba(255, 179, 0, 0.25);
      font-weight: bold;
    }
  `;

  protected render() {
    if (!this.info) return html``;

    const { active, remaining, configured } = this.info;

    let label = "";
    if (remaining) {
      label = localize("chip.keep_warm_remaining", this.language, {
        remaining: `${remaining.minutes}m`,
      });
    } else if (configured) {
      label = localize("chip.keep_warm_configured", this.language, {
        duration: configured.minutes >= 60 ? `${configured.minutes / 60}h` : `${configured.minutes}m`,
      });
    } else {
      label = localize("status.keeping_warm", this.language);
    }

    return html`
      <whc-chip
        class=${active ? "active" : ""}
        icon="mdi:fire-timer"
        .label=${label}
      ></whc-chip>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "whc-keep-warm-chip": KeepWarmChip;
  }
}
