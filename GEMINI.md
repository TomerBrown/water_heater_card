# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A custom Home Assistant Lovelace card for `water_heater` entities, mushroom-card inspired, optimized for smart electric kettles (reference device: Xiaomi Miot `xiaomi.kettle.v20`).

**Pre-implementation.** Only `docs/plan.md` exists — that file is the design source of truth. Read it before proposing architectural changes; update it when decisions change.

Two load-bearing decisions to know up front:
- **Adapter pattern.** The card renders against a `WaterHeaterAdapter` interface; vendor quirks live in adapters. New device support = new adapter.
- **Normalized status union.** `"off" | "idle" | "heating" | "keeping_warm" | "ready" | "fault"`. `ready` is derived (`current ≈ target`), not vendor-supplied.

For Xiaomi MIoT enum specs (e.g. `kettle.status`), the authoritative source is the JSON API at `miot-spec.org/miot-spec-v2/instance?type=urn:...`. The human page at `home.miot-spec.com` is JS-rendered.

---

## Working style

These guidelines bias toward caution over speed. For trivial tasks, use judgment.

### 1. Think before coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

- State assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them — don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### 2. Simplicity first

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: would a senior engineer say this is overcomplicated? If yes, simplify.

### 3. Surgical changes

**Touch only what you must. Clean up only your own mess.**

- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- Mention unrelated dead code; don't delete it.
- Remove only imports/variables that *your* changes orphaned.

The test: every changed line should trace directly to the user's request.

### 4. Goal-driven execution

**Define success criteria. Loop until verified.**

Turn tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan with a verify check per step.
