import { defineConfig } from "vite";

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
    outDir: "../../dist/mfe/dashboard",
    emptyOutDir: true,
    minify: true,
  },
});
