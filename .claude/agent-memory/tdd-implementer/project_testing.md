---
name: Testing framework and tsconfig notes
description: Vitest setup, JSON import pattern, tsconfig exclude for test files
type: project
---

Test runner is Vitest (added in T1e). Test files live alongside source as `src/*.test.ts`. Run with `npm test` (vitest run).

JSON translation files imported directly in TypeScript (`import en from "../translations/en.json"`). Vitest resolves these natively; Rollup uses `@rollup/plugin-json`.

tsconfig `"exclude": ["src/**/*.test.ts"]` is required — including test files pulls in Vitest's type declarations which conflict with each other (TS2320 on `Assertion<T>` dual-extend). Production type-check must exclude test files.

`npm run build` was already failing before T1e (pre-existing T0 issue: Rollup can't parse `type`/`declare global` in water-heater-card.ts, suggesting a TypeScript plugin activation problem). Not introduced by T1e.

**Why:** Documented so future tasks know the build breakage is pre-existing and not to debug it as part of T1x/T2x work.

**How to apply:** When a build check fails, confirm it was already broken on main before blaming your changes.
