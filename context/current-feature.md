# Current Feature

None

## Status

<!-- Not Started|In Progress|Completed -->

Not Started

## Goals

None

## Notes

None

## History

<!-- Keep this updated. Earliest to latest -->

### Dashboard UI Phase 2

- Started: 2026-07-02.
- Completed: 2026-07-02.
- Status: Completed.
- Switched current feature context to phase 2 spec.
- Installed ShadCN components: `Avatar`, `Separator`, `ScrollArea`, `Sheet`.
- Added `src/lib/icons.tsx` with `getItemTypeIcon()` (maps ItemType `icon` strings to Lucide components) and `typeToSlug()` (converts ItemType names to `/items/TYPE` URL slugs).
- Created `src/components/dashboard/sidebar.tsx` with a shared `SidebarContent` (item types linked to `/items/TYPE`, favorite collections, most recent collections, user avatar area at the bottom) and a desktop `Sidebar` that collapses to an icon rail via a drawer icon (`PanelLeftOpen`/`PanelLeftClose`).
- Updated `src/components/dashboard/top-bar.tsx` to add a mobile menu button that opens a left-side `Sheet` drawer reusing `SidebarContent` (always a drawer on mobile view).
- Replaced the placeholder sidebar in `src/app/dashboard/layout.tsx` with the new `Sidebar` component.
- Build and lint pass.

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
