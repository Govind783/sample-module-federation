import { execSync } from "child_process";
import { mkdirSync, cpSync } from "fs";

const run = (cmd, cwd) => execSync(cmd, { cwd, stdio: "inherit" });

mkdirSync("dist", { recursive: true });

console.log("\n--- Building Tailwind CSS (host-level) ---");
run("npx tailwindcss -i host.css -o dist/styles.css --minify");

console.log("\n--- Building shared store ---");
run("npx vite build", "shared");

console.log("\n--- Building header MFE ---");
run("npx vite build", "mfe/header");

console.log("\n--- Building dashboard MFE ---");
run("npx vite build", "mfe/dashboard");

cpSync("index.html", "dist/index.html");
console.log("\nDone! Run: npm run preview");
