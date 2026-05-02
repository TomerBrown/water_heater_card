import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("whc-chip")
export class Chip extends LitElement {
  @property() public icon?: string;
  @property() public label?: string;
  @property({ type: Boolean }) public disabled = false;

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      height: 32px;
      padding: 0 10px;
      border-radius: 16px;
      background: var(--chip-background-color, rgba(127, 127, 127, 0.12));
      cursor: pointer;
      user-select: none;
      transition: background 0.2s, filter 0.2s;
    }

    :host(:hover) {
      filter: brightness(1.1);
    }

    :host(:active) {
      filter: brightness(0.9);
    }

    :host([disabled]) {
      opacity: 0.5;
      cursor: not-allowed;
      filter: none;
    }

    ha-icon {
      --mdc-icon-size: 16px;
    }

    .label {
      font-size: 0.9em;
      font-weight: 500;
    }
  `;

  protected render() {
    return html`
      ${this.icon ? html`<ha-icon .icon=${this.icon}></ha-icon>` : ""}
      ${this.label ? html`<span class="label">${this.label}</span>` : ""}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "whc-chip": Chip;
  }
}
