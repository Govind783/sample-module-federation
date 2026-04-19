import { defineConfig } from "vite";

// Every shared dep is "external" — Vite will NOT bundle it.
// The minified output keeps `import React from "react"` verbatim.
// The browser resolves that bare specifier via the host page's import map.
const SHARED_DEPS = ["react", "react-dom", "zustand", "moment", "shared/store"];

export default defineConfig({
  build: {
    lib: {
      entry: "src/main.tsx",
      formats: ["es"],
      fileName: () => "index.js",
    },
    rollupOptions: {
      external: (id) => SHARED_DEPS.some((d) => id === d || id.startsWith(d + "/")),
    },
    outDir: "../../dist/mfe/header",
    emptyOutDir: true,
    minify: true, // esbuild minification — mangles internal vars, NOT import specifiers
  },
});
