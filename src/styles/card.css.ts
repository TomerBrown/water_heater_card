import { css } from "lit";

export const cardStyles = css`
  :host {
    display: block;
    width: 100%;
    max-width: 100%;
    min-width: 0;
    box-sizing: border-box;
    --whc-radius-md: 8px;
    --whc-radius-card: calc(var(--ha-card-border-radius, 16px));
    /* Mushroom-like tile density: icon row + slim affordance (~44px shapes are common there). */
    --whc-padding: clamp(10px, 2vw, 14px);
    --whc-color-heating: #ff8c00;
    --whc-color-keeping_warm: #4285f4;
    --whc-color-idle: var(--primary-text-color);
    --whc-color-off: #757575;
    --whc-color-fault: var(--error-color);
    --whc-shape-size: 44px;
  }

  ha-card {
    height: 100%;
    box-sizing: border-box;
    padding: var(--whc-padding);
    border-radius: var(--whc-radius-card);
    overflow: clip;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: var(
      --ha-card-background-color,
      var(--card-background-color, var(--primary-background-color, #fff))
    );
    border: none;
    box-shadow: var(
      --ha-card-box-shadow,
      0 4px 24px rgba(0, 0, 0, 0.06),
      0 1px 3px rgba(0, 0, 0, 0.04)
    );
  }

  ha-card:focus-within {
    outline: none;
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  /* Header */
  .header-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 11px;
    min-height: calc(var(--whc-shape-size) + 2px);
  }

  .header-row whc-shape {
    flex-shrink: 0;
    width: var(--whc-shape-size);
    height: var(--whc-shape-size);
  }

  .header-center {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    min-width: 0;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1px;
    min-width: 0;
    flex: 1;
    text-align: start;
  }

  .primary {
    font-weight: 700;
    font-size: 0.9375rem;
    line-height: 1.2;
    letter-spacing: -0.015em;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .secondary {
    font-weight: 500;
    font-size: 0.75rem;
    line-height: 1.2;
    color: var(--whc-state-muted, var(--secondary-text-color));
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .state--heating .secondary {
    color: var(--whc-state-color);
  }

  .state--keeping_warm .secondary {
    color: var(--whc-state-color);
  }

  .state--fault .secondary {
    color: var(--whc-color-fault);
  }

  .state--off .secondary {
    color: var(--whc-color-off);
  }

  .state--idle .secondary {
    color: var(--secondary-text-color);
  }

  .temp-display--ambient {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-end;
    flex-shrink: 0;
    margin-inline-start: auto;
    font-variant-numeric: tabular-nums;
  }

  .temp-current--ambient {
    font-size: 1.05rem;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: var(--secondary-text-color);
    line-height: 1;
  }

  .power-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
  }

  .extras-wrap {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin-top: 1px;
  }

  .extras-toggle {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    gap: 6px;
    padding: 5px 8px;
    border-radius: var(--whc-radius-md);
    border: 1px solid color-mix(in srgb, var(--primary-text-color) 11%, transparent);
    background: color-mix(in srgb, var(--primary-text-color) 5%, transparent);
    color: var(--primary-text-color);
    font: inherit;
    font-size: 0.6875rem;
    font-weight: 600;
    cursor: pointer;
    transition:
      background 0.18s ease,
      border-color 0.18s ease;
    text-align: start;
    min-height: 30px;
    box-sizing: border-box;
  }

  .extras-toggle:hover {
    background: color-mix(in srgb, var(--primary-text-color) 9%, transparent);
    border-color: color-mix(in srgb, var(--primary-text-color) 18%, transparent);
  }

  .extras-toggle ha-icon.extras-chevron {
    flex-shrink: 0;
    --mdc-icon-size: 18px;
    color: var(--secondary-text-color);
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .extras-toggle ha-icon.extras-chevron.open {
    transform: rotate(-180deg);
  }

  .extras-panel {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-top: 8px;
    margin-top: 2px;
    border-top: 1px solid color-mix(in srgb, var(--primary-text-color) 8%, transparent);
    animation: whcExtrasIn 0.2s ease;
  }

  .focus-target-row {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    gap: 10px;
    padding: 7px 10px;
    border-radius: var(--whc-radius-md);
    background: color-mix(in srgb, var(--primary-text-color) 6%, transparent);
    border: 1px solid color-mix(in srgb, var(--primary-text-color) 10%, transparent);
  }

  .focus-target-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .focus-target-value {
    font-size: 1.55rem;
    font-weight: 700;
    line-height: 1;
    font-variant-numeric: tabular-nums;
    color: var(--primary-text-color);
  }

  @keyframes whcExtrasIn {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .temp-display {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: flex-end;
    flex-shrink: 0;
    gap: 3px;
    color: var(--whc-state-color, var(--primary-text-color));
    font-variant-numeric: tabular-nums;
    margin-inline-start: auto;
  }

  .temp-current {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.04em;
    line-height: 1;
  }

  .temp-target {
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--secondary-text-color);
    opacity: 0.72;
    align-self: baseline;
    margin-inline-start: 1px;
  }

  .state--keeping_warm .temp-target {
    display: none;
  }

  /* Controls */
  .control-section {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .section-label {
    font-size: 0.6875rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--secondary-text-color);
    opacity: 0.85;
    margin-inline-start: 2px;
  }

  /* Flex row survives narrow HA columns better than grid in some masonry layouts */
  .preset-row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: stretch;
    gap: 8px;
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
  }

  .preset-row > whc-preset-button {
    flex: 1 1 0%;
    min-width: 0;
    max-width: 100%;
  }

  /* Accent tokens */
  .state--heating {
    --whc-state-color: var(--whc-color-heating);
    --whc-state-muted: color-mix(in srgb, var(--whc-color-heating) 55%, var(--secondary-text-color));
  }
  .state--keeping_warm {
    --whc-state-color: var(--whc-color-keeping_warm);
    --whc-state-muted: color-mix(in srgb, var(--whc-color-keeping_warm) 50%, var(--secondary-text-color));
  }
  .state--idle {
    --whc-state-color: var(--whc-color-idle);
  }
  .state--off {
    --whc-state-color: var(--whc-color-off);
  }
  .state--fault {
    --whc-state-color: var(--whc-color-fault);
  }

  :host([layout="sparse"]) .card {
    gap: 14px;
  }

  :host([layout="dense"]) .card {
    gap: 5px;
  }

  :host([roundness="square"]) {
    --whc-radius-md: 6px;
    --whc-radius-card: 10px;
  }

  :host([roundness="pill"]) {
    --whc-radius-md: 999px;
  }

  :host([compact]) .card {
    gap: 10px;
  }

  :host([compact]) ha-card {
    padding: 10px 12px;
  }

  :host([ui_variant="compact"]) {
    --whc-padding: 8px 10px;
    --whc-shape-size: 40px;
  }

  :host([ui_variant="compact"]) .card {
    gap: 5px;
  }

  :host([ui_variant="compact"]) .primary {
    font-size: 0.875rem;
  }

  :host([ui_variant="compact"]) .temp-current,
  :host([ui_variant="compact"]) .focus-target-value {
    font-size: 1.35rem;
  }

  :host([ui_variant="compact"]) .extras-toggle {
    min-height: 28px;
    padding: 3px 6px;
    font-size: 0.625rem;
  }

  :host([ui_variant="comfort"]) {
    --whc-padding: clamp(18px, 3vw, 24px);
    --whc-shape-size: 58px;
  }

  :host([ui_variant="comfort"]) .card {
    gap: 22px;
  }

  :host([ui_variant="comfort"]) .preset-row {
    gap: 10px;
  }

  :host([ui_variant="comfort"]) .extras-toggle {
    min-height: 48px;
    padding: 12px 14px;
    font-size: 0.875rem;
  }

  /* Pending: command sent, waiting for entity to reflect new hardware state */
  @keyframes whc-pending-scan {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 200% 50%;
    }
  }

  @keyframes whc-shape-pending {
    0%,
    100% {
      transform: scale(1);
      filter: brightness(1);
    }
    50% {
      transform: scale(1.04);
      filter: brightness(1.12);
    }
  }

  @keyframes whc-label-pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.58;
    }
  }

  :host([data-pending]) ha-card.whc-card--pending {
    box-shadow:
      0 0 0 2px color-mix(in srgb, var(--primary-color, rgb(92, 158, 255)) 65%, transparent),
      var(--ha-card-box-shadow, 0 4px 24px rgba(0, 0, 0, 0.06));
    transition: box-shadow 0.25s ease;
  }

  :host([data-pending]) .card {
    position: relative;
  }

  :host([data-pending]) .card::after {
    content: "";
    position: absolute;
    left: 6px;
    right: 6px;
    bottom: 0;
    height: 3px;
    border-radius: 99px;
    pointer-events: none;
    opacity: 0.92;
    background: linear-gradient(
      90deg,
      transparent 0%,
      color-mix(in srgb, var(--primary-color, rgb(92, 158, 255)) 70%, transparent) 48%,
      transparent 100%
    );
    background-size: 200% 100%;
    animation: whc-pending-scan 1.2s linear infinite;
  }

  :host([data-pending]) .header-row whc-shape {
    animation: whc-shape-pending 1.1s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    will-change: transform, filter;
  }

  .secondary.secondary--pending {
    color: color-mix(in srgb, var(--primary-color, rgb(92, 158, 255)) 92%, var(--primary-text-color));
    font-weight: 650;
  }

  .info .secondary.secondary--pending {
    animation: whc-label-pulse 1s ease-in-out infinite;
  }

  ha-card.unavailable {
    opacity: 0.88;
  }
`;
