# Current Feature

## Dashboard UI Phase 1

Phase 1 of 3 for the dashboard UI layout. Sets up ShadCN UI, the `/dashboard` route, dark mode by default, a top bar with search and a new item button (display only), and placeholder sidebar/main areas.

## Status

Completed

## Goals

- ShadCN UI initialization and components
- ShadCN component installation
- Dashboard route at `/dashboard`
- Main dashboard layout and any global styles
- Dark mode by default
- Top bar with search and new item button (display only)
- Placeholder for sidebar and main area (just an `h2` with "Sidebar" and "Main" for now)

## Notes

- Spec: `devstash/context/features/dashboard-phase-1-spec.md`
- Reference screenshot: `devstash/context/screenshots/dashboard-ui-main.png`
- Related: phase 2 (`dashboard-phase-2-spec.md`) and phase 3 (`dashboard-phase-3-spec.md`)
- Mock data available at `src/lib/mock-data.ts`

## History

### Dashboard UI Phase 1

- Started: 2026-07-01.
- Completed: 2026-07-02.
- Status: Completed.
- Initialized ShadCN UI (`components.json`, `src/lib/utils.ts`, CSS variables in `globals.css`).
- Installed ShadCN components: `Button` and `Input`.
- Set up dark mode by default via `next-themes` (`ThemeProvider` in root layout).
- Created `/dashboard` route with a layout containing a top bar (search input + New Item button, display only) and `h2` placeholders for Sidebar and Main.
- Build and lint pass.

### Initial Next.js Setup

- Scaffolded Next.js app (`devstash`) using the App Router with TypeScript.
- Stack: Next.js `16.2.9`, React `19.2.4`, React DOM `19.2.4`.
- Styling: Tailwind CSS v4 via `@tailwindcss/postcss` and `postcss.config.mjs`.
- Tooling: ESLint `9` with `eslint-config-next`, TypeScript `5`, Node/React type definitions.
- Default app structure created: `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`, and `public/favicon.ico`.
- Config files in place: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`.
- npm scripts: `dev`, `build`, `start`, `lint`.
- Status: Completed.
