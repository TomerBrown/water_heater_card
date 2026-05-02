/** Minimal helper compatible with HA’s `hass-more-info` pattern. */

export function fireEvent(
  el: HTMLElement,
  type: string,
  detail?: Record<string, unknown>,
): boolean {
  return el.dispatchEvent(
    new CustomEvent(type, { bubbles: true, composed: true, detail: detail ?? {} }),
  );
}
