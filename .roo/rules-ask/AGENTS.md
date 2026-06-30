# Project Documentation Rules (Non-Obvious Only)

- **`README.md` is the unmodified create-next-app boilerplate** — it is NOT accurate
  project documentation. It still says "yarn/pnpm/bun dev" and links to generic Next.js
  docs. Do not trust it for project-specific facts.
- **`CLAUDE.md` only contains `@AGENTS.md`** — it just imports AGENTS.md. Real guidance
  lives in `AGENTS.md`.
- **Next.js 16 docs are bundled locally** at `node_modules/next/dist/docs/` (folders
  `01-app`, `02-pages`, `03-architecture`, `04-community`, plus `index.md`). These are
  the authoritative reference for this version, not the public nextjs.org site.
- **Tailwind v4 has no config file** — don't look for `tailwind.config.js`. Config lives
  in `src/app/globals.css` via `@theme`.
