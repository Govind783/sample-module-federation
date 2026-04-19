// Entry point — identical to any React app's main.tsx
// In a massive app, this is the ONLY file that differs from a standalone React app.
// Everything below (App, components, routes) is normal React code.
import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

createRoot(document.getElementById("app-header")!).render(<App />);
