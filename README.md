# Import Maps + Module Federation (no Webpack)

MAIN point of MFE is to let 2 JS's / multiple apps of micro FE share dependancies, example react, moment.js, zustand etc


# this example
we share
* react
* react/jsx-runtime
* react-dom
* react-dom/client
* zustand
* zustand/vanilla
* moment
* one shared zustand data store

apps write normal react only example
import react from react
but when bundling u tell vite that hey dont bundle this and on runtime browser fecthes it thanks to the map and caches it


---
## Structure

```
/                   ← host app (Vite dev server / preview)
  index.html        ← import map lives here
  host.css          ← Tailwind input (scans all MFE src dirs)
  build.js          ← orchestrates the full build

shared/
  store.ts          ← zustand store built as a shared ES module

mfe/
  header/           ← Header micro-frontend
  dashboard/        ← Dashboard micro-frontend
  any-app-of-your-choice
  build N number of apps and build their JS and fetch their JS and mount
```

## Setup

Each of the three packages has its own `node_modules`. Install all of them:

```bash
npm install                    # host
npm install --prefix mfe/header
npm install --prefix mfe/dashboard
```

(`shared/` has no dependencies — nothing to install there.)

## Dev

```bash
npm run dev       # starts Vite dev server on http://localhost:5173
```

Vite serves everything including built MFE output from `dist/`. You need to build at least once before the MFEs show up (see below).

## Build

```bash
npm run build
```

This runs `build.js` which:
1. Compiles Tailwind → `dist/styles.css`
2. Builds `shared/store.ts` → `dist/shared/store.js`
3. Builds `mfe/header` → `dist/mfe/header/index.js`
4. Builds `mfe/dashboard` → `dist/mfe/dashboard/index.js`
5. Copies `index.html` → `dist/index.html`

Then preview the production build:

```bash
npm run preview   # http://localhost:4173
```

## How it works

The import map in `index.html` is the single source of truth for shared deps (React, Zustand, Moment). Both MFEs are built with those deps marked `external`, so their bundles contain bare `import React from "react"` statements. The browser resolves these via the import map — guaranteeing one shared instance, no duplication.

`shared/store` is served locally (`/shared/store.js`) and also mapped, so both MFEs share the same Zustand store instance.
