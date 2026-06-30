# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Context Files

Read the following to get the full context of the project

- @context/project-overview.md
- @context/coding-standards.md
- @context/ai-interaction.md
- @context/current-feature.md

## ⚠️ This is NOT the Next.js you know

This project runs **Next.js 16.2.9** (React 19.2.4). It has breaking changes — APIs,
conventions, and file structure may all differ from your training data. Before writing
any Next.js code, read the relevant guide in `node_modules/next/dist/docs/` (folders:
`01-app`, `02-pages`, `03-architecture`, `04-community`, plus `index.md`). Heed
deprecation notices.

## Commands

- `npm run dev` — dev server
- `npm run build` — production build
- `npm run lint` — runs bare `eslint` (Next 16 removed `next lint`; do NOT use it)
- `npm start` — runs `next build & next start` (note the `&`, not `&&` — runs build
  and start concurrently; likely a bug, prefer `next build && next start` if you need
  sequential)
- **No test framework is configured.** There is no test script and no test runner.

## Non-obvious conventions

- **Tailwind v4, config-less:** no `tailwind.config.js`. Theme/config is done in CSS via
  `@import 'tailwindcss'` in `src/app/globals.css` and `@theme` blocks. PostCSS uses
  `@tailwindcss/postcss` (not the legacy `tailwindcss` plugin).
- **Path alias:** `@/*` → `./src/*` (configured in `tsconfig.json`).
- **ESLint flat config** (`eslint.config.mjs`), extending `eslint-config-next/core-web-vitals`
  and `eslint-config-next/typescript`.
- **Fonts:** Geist + Geist Mono loaded via `next/font/google` in `src/app/layout.tsx`,
  exposed as CSS variables `--font-geist-sans` / `--font-geist-mono`.
- `CLAUDE.md` just contains `@AGENTS.md` (imports this file).
