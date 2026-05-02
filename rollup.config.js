import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import json from "@rollup/plugin-json";

export default {
  input: "dist/src/water-heater-card.js",
  output: [
    {
      file: "dist/water-heater-card.js",
      format: "es",
      sourcemap: true,
      inlineDynamicImports: true,
    },
    /* Same bundle beside the harness so /dev/index.html works even when dist/ is missing from the server root (e.g. serve dev/, Cursor preview). */
    {
      file: "dev/harness-bundle.js",
      format: "es",
      sourcemap: true,
      inlineDynamicImports: true,
    },
  ],
  plugins: [
    resolve(),
    json(),
    terser(),
  ],
};
