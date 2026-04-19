import { defineConfig, Plugin } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// In dev mode:
// 1. Strip the import map — Vite resolves bare specifiers from node_modules
// 2. Rewrite MFE script tags to source .tsx files for HMR
// 3. Rewrite CSS href to source host.css so Tailwind Vite plugin processes it
// In prod: index.html is copied as-is to dist/ (import map + built paths stay)
function mfeDevPlugin(): Plugin {
  return {
    name: "mfe-dev",
    transformIndexHtml: {
      order: "pre",
      handler(html, ctx) {
        if (ctx.server) {
          return html
            .replace(/<script type="importmap">[\s\S]*?<\/script>/, "<!-- importmap: disabled in dev, Vite resolves everything -->")
            .replace('src="/mfe/header/index.js"', 'src="/mfe/header/src/main.tsx"')
            .replace('src="/mfe/dashboard/index.js"', 'src="/mfe/dashboard/src/main.tsx"')
            .replace('href="/styles.css"', 'href="/host.css"');
        }
      },
    },
  };
}

export default defineConfig({
  plugins: [mfeDevPlugin(), tailwindcss()],
  resolve: {
    alias: {
      "shared/store": path.resolve("shared/store.ts"),
    },
    // Force all packages to use the SAME React instance from root node_modules.
    // Without this, react-router-dom (in mfe/dashboard/node_modules/) gets its
    // own React copy during pre-bundling → dual React → hooks explode.
    dedupe: ["react", "react-dom"],
  },
  server: { port: 3456 },
  preview: { port: 3456 },
});
