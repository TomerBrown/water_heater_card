import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("whc-slider")
export class Slider extends LitElement {
  @property({ type: Number }) public value = 0;
  @property({ type: Number }) public min = 0;
  @property({ type: Number }) public max = 100;
  @property({ type: Number }) public step = 1;

  static styles = css`
    :host {
      display: block;
      height: 42px;
      --slider-color: var(--primary-color);
      --slider-bg: rgba(var(--rgb-primary-color), 0.2);
    }

    .container {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
    }

    input {
      width: 100%;
      height: 100%;
      appearance: none;
      background: none;
      margin: 0;
      padding: 0;
      cursor: pointer;
      z-index: 1;
      border-radius: 12px;
    }

    input::-webkit-slider-runnable-track {
      width: 100%;
      height: 42px;
      background: var(--slider-bg);
      border-radius: 12px;
    }

    input::-webkit-slider-thumb {
      appearance: none;
      width: 12px;
      height: 42px;
      background: var(--slider-color);
      border-radius: 6px;
      border: 2px solid var(--card-background-color);
      margin-top: 0;
    }

    .progress {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      background: var(--slider-color);
      border-radius: 12px;
      pointer-events: none;
      opacity: 0.3;
    }
  `;

  private _onChange(e: Event) {
    const value = (e.target as HTMLInputElement).value;
    this.value = parseFloat(value);
    this.dispatchEvent(
      new CustomEvent("change", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      })
    );
  }

  protected render() {
    const percentage = ((this.value - this.min) / (this.max - this.min)) * 100;

    return html`
      <div class="container">
        <div class="progress" style="width: ${percentage}%"></div>
        <input
          type="range"
          .value=${String(this.value)}
          .min=${String(this.min)}
          .max=${String(this.max)}
          .step=${String(this.step)}
          @input=${this._onChange}
        />
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "whc-slider": Slider;
  }
}
