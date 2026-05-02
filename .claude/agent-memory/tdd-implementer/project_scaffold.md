---
name: T0 scaffold decisions
description: Build toolchain choices and gotchas from the T0 scaffold task
type: project
---

Build stack: Lit 3, TypeScript 5, Rollup 4, @rollup/plugin-terser 1.x (not 0.4.x — has CVE in serialize-javascript). package.json needs `"type": "module"` or rollup warns on ES config files. rollup output needs `sourcemap: true` to match tsconfig `sourceMap: true`, otherwise rollup warns.

`moduleResolution: "bundler"` in tsconfig works fine with this stack.

**Why:** Pinned terser to ^1.0.0 to avoid GHSA-5c6j-r48x-rmvq / GHSA-qj8w-gfj5-8c6v in serialize-javascript ≤7.0.4.

**How to apply:** When updating @rollup/plugin-terser, keep it at ^1.0.0 or higher.
