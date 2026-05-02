import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("whc-preset-button")
export class PresetButton extends LitElement {
  @property({ type: Boolean, reflect: true }) public active = false;
  @property() public label = "";
  @property() public color = "var(--primary-text-color)";

  static styles = css`
    :host {
      display: block;
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
    }

    button {
      width: 100%;
      min-height: 38px;
      padding: 0 6px;
      background: transparent;
      border: 1px solid color-mix(in srgb, var(--primary-text-color) 14%, transparent);
      border-radius: var(--whc-radius-md, 10px);
      color: var(--primary-text-color);
      font-size: 0.8125rem;
      font-weight: 650;
      font-variant-numeric: tabular-nums;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition:
        border-color 0.18s ease,
        background-color 0.18s ease,
        color 0.18s ease,
        box-shadow 0.18s ease,
        transform 0.14s ease;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
      box-sizing: border-box;
    }


    button:hover {
      background: color-mix(in srgb, var(--primary-text-color) 6%, transparent);
      border-color: color-mix(in srgb, var(--primary-text-color) 22%, transparent);
    }

    button:active {
      transform: scale(0.97);
    }

    :host([active]) button {
      background: color-mix(in srgb, var(--active-color) 13%, transparent) !important;
      border-color: color-mix(in srgb, var(--active-color) 65%, transparent) !important;
      color: var(--active-color) !important;
      box-shadow: 0 0 0 1px color-mix(in srgb, var(--active-color), transparent 92%);
    }

    :host([active]:hover) button {
      filter: brightness(1.03);
    }
  `;

  protected render() {
    this.style.setProperty("--active-color", this.color);

    return html`
      <button type="button" part="button">
        ${this.label}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "whc-preset-button": PresetButton;
  }
}
