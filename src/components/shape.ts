import { LitElement, html, css, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Status, STATUS_COLORS, STATUS_ICONS } from "../const";

@customElement("whc-shape")
export class Shape extends LitElement {
  @property() public icon?: string;
  @property() public status?: Status;
  @property({ type: Number }) public progress = 0;
  /** When true: pointer cursor / tap feedback (e.g. start heating). */
  @property({ type: Boolean, reflect: true }) clickable = false;

  protected updated(changed: PropertyValues): void {
    super.updated(changed);
    if (!changed.has("clickable")) return;
    if (!this.clickable) {
      this.removeAttribute("role");
      this.removeAttribute("tabindex");
    } else {
      this.setAttribute("role", "button");
      this.setAttribute("tabindex", "0");
    }
  }
  static styles = css`
    :host {
      --shape-color: var(--disabled-color);
      box-sizing: border-box;
      width: var(--whc-shape-size, 44px);
      height: var(--whc-shape-size, 44px);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      position: relative;
    }

    .shape-background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: color-mix(in srgb, var(--shape-color) 14%, transparent);
      border: 1px solid color-mix(in srgb, var(--shape-color) 12%, transparent);
    }

    svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);
      pointer-events: none;
    }

    circle {
      fill: none;
      stroke-linecap: round;
      stroke-width: 2.75;
      transition:
        stroke-dashoffset 0.55s cubic-bezier(0.4, 0, 0.2, 1),
        opacity 0.25s ease;
    }

    .ring-bg {
      stroke: var(--shape-color);
      opacity: 0.22;
    }

    .ring-progress {
      stroke: var(--shape-color);
      opacity: 1;
    }

    ha-icon {
      color: var(--shape-color);
      --mdc-icon-size: calc(var(--whc-shape-size, 44px) * 0.48);
      z-index: 1;
    }

    @keyframes shape-steam {
      0%,
      100% {
        transform: scale(1) translateY(0);
      }
      50% {
        transform: scale(1.012) translateY(-0.6px);
      }
    }

    :host([clickable]) {
      cursor: pointer;
    }

    :host([clickable]) .shape-background {
      transition:
        transform 0.12s ease,
        filter 0.15s ease,
        background 0.2s;
    }

    :host([clickable]:active) .shape-background {
      transform: scale(0.93);
      filter: brightness(0.92);
    }

    :host(.animated) .shape-background {
      animation: shape-steam 3.2s ease-in-out infinite;
    }
  `;

  protected render() {
    const color = this.status ? STATUS_COLORS[this.status] : "var(--disabled-color)";
    const icon = this.icon || (this.status ? STATUS_ICONS[this.status] : "mdi:kettle");

    const radius = 22.5;
    const circumference = 2 * Math.PI * radius;
    const offset =
      Number.isFinite(this.progress) === false ? circumference : circumference - (this.progress / 100) * circumference;

    this.style.setProperty("--shape-color", color);

    const showRing = this.status === "heating" || this.status === "keeping_warm";
    const steam = this.status === "heating" || this.status === "keeping_warm";

    this.classList.toggle("animated", steam);

    return html`
      <div class="shape-background"></div>
      ${showRing
        ? html`
            <svg viewBox="0 0 52 52" aria-hidden="true">
              <circle class="ring-bg" cx="26" cy="26" r="${radius}"></circle>
              <circle
                class="ring-progress"
                cx="26"
                cy="26"
                r="${radius}"
                stroke-dasharray="${circumference}"
                stroke-dashoffset="${offset}"
              ></circle>
            </svg>
          `
        : ""}
      <ha-icon .icon=${icon}></ha-icon>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "whc-shape": Shape;
  }
}
