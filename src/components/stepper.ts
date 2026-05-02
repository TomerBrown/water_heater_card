import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("whc-stepper")
export class Stepper extends LitElement {
  @property({ type: Number }) public value = 0;
  @property({ type: Number }) public min = 0;
  @property({ type: Number }) public max = 100;
  @property({ type: Number }) public step = 1;

  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      align-items: center;
      background: var(--whc-stepper-bg, rgba(127, 127, 127, 0.1));
      border-radius: var(--whc-border-radius-chip, 24px);
      overflow: hidden;
      height: 48px;
      color: var(--primary-text-color);
    }

    button {
      background: none;
      border: none;
      color: inherit;
      padding: 0 16px;
      height: 100%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s;
    }

    button:hover {
      background: rgba(127, 127, 127, 0.05);
    }

    button:active {
      background: rgba(127, 127, 127, 0.25);
    }

    button:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    .value {
      flex: 1;
      text-align: center;
      font-weight: 600;
      font-size: 1.2rem;
      padding: 0 8px;
      min-width: 60px;
      letter-spacing: -0.5px;
    }

    ha-icon {
      --mdc-icon-size: 24px;
      display: flex;
    }
  `;

  private _decrement() {
    this._updateValue(this.value - this.step);
  }

  private _increment() {
    this._updateValue(this.value + this.step);
  }

  private _updateValue(newValue: number) {
    if (newValue < this.min) newValue = this.min;
    if (newValue > this.max) newValue = this.max;
    
    if (newValue !== this.value) {
      this.value = newValue;
      this.dispatchEvent(new CustomEvent("change", { 
        detail: { value: newValue }, 
        bubbles: true, 
        composed: true 
      }));
    }
  }

  protected render() {
    return html`
      <button ?disabled=${this.value <= this.min} @click=${this._decrement}>
        <ha-icon icon="mdi:minus"></ha-icon>
      </button>
      <div class="value">${this.value}°</div>
      <button ?disabled=${this.value >= this.max} @click=${this._increment}>
        <ha-icon icon="mdi:plus"></ha-icon>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "whc-stepper": Stepper;
  }
}
