# Project Architecture Rules (Non-Obvious Only)

- **Next.js 16 App Router** — breaking changes from prior majors. Architectural
  decisions (route conventions, server/client component boundaries, caching defaults)
  must be verified against `node_modules/next/dist/docs/01-app/` before proposing
  designs; do not rely on Next 13/14/15 patterns from training data.
- **Tailwind v4 (config-less)** — theming architecture is CSS-first via `@theme` in
  `src/app/globals.css`, not a JS config file. Design tokens must be defined there.
- **Single-route app so far:** only `src/app/page.tsx` + `src/app/layout.tsx` exist.
  Root layout applies Geist font CSS variables and a flex column body shell.
- **No backend/data layer, no test layer, no state library** currently. Architecture is
  a fresh create-next-app baseline — propose additions explicitly rather than assuming
  existing patterns to follow.
