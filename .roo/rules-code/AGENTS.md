# Project Coding Rules (Non-Obvious Only)

- **Next.js 16 breaking changes:** APIs/conventions may differ from training data. Read
  `node_modules/next/dist/docs/` (`01-app`, `02-pages`, `03-architecture`) before writing
  Next.js code. Heed deprecation notices.
- **Tailwind v4 is config-less:** no `tailwind.config.js`. Configure theme via `@theme`
  blocks in `src/app/globals.css`. PostCSS uses `@tailwindcss/postcss`, not the legacy
  `tailwindcss` plugin — do not add a `tailwind.config.js`.
- **Lint command is bare `eslint`** (Next 16 removed `next lint`). Do not run `next lint`.
- **Path alias:** import via `@/...` → resolves to `src/...`.
- **Fonts:** use the existing `--font-geist-sans` / `--font-geist-mono` CSS variables set
  up in `src/app/layout.tsx` via `next/font/google`; don't re-declare Geist fonts.
- **No test framework exists.** If asked to "run tests," there is nothing to run — confirm
  with the user before adding one.
