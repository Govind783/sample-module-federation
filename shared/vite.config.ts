import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "store.ts",
      formats: ["es"],
      fileName: () => "store.js",
    },
    rollupOptions: {
      // zustand/vanilla stays as a bare import — resolved by import map at runtime
      external: (id) => id.startsWith("zustand"),
    },
    outDir: "../dist/shared",
    emptyOutDir: true,
    minify: true,
  },
});
