import { describe, it, expect } from "vitest";
import { localize } from "./localize.js";

describe("localize", () => {
  it("returns english translation for known key", () => {
    expect(localize("status.heating", "en")).toBe("Heating");
  });

  it("returns hebrew translation for known key", () => {
    expect(localize("status.heating", "he")).toBe("מחמם");
  });

  it("strips region suffix from language tag", () => {
    expect(localize("status.heating", "he-IL")).toBe("מחמם");
  });

  it("falls back to english for unknown language", () => {
    expect(localize("status.heating", "fr")).toBe("Heating");
  });

  it("falls back to english when language is undefined", () => {
    expect(localize("status.heating", undefined)).toBe("Heating");
  });

  it("returns the key itself when key is missing in all locales", () => {
    expect(localize("nonexistent.key", "en")).toBe("nonexistent.key");
  });

  it("substitutes placeholders from vars", () => {
    expect(localize("chip.keep_warm_remaining", "en", { remaining: "5m" })).toBe("5m left");
  });

  it("preserves unmatched placeholders when vars does not provide them", () => {
    expect(localize("chip.keep_warm_remaining", "en", {})).toBe("{remaining} left");
  });
});
