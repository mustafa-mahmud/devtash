# Project Debug Rules (Non-Obvious Only)

- **Next.js 16:** error messages/stack traces may reference APIs that changed. Cross-check
  against `node_modules/next/dist/docs/` before assuming a fix from training data is correct.
- **`npm start` runs `next build & next start`** (single `&` = concurrent, not sequential).
  This can start the server before the build finishes, causing confusing "module not found"
  errors. For reliable local prod testing run `next build && next start` manually.
- **No test runner** — there is no `npm test`. Don't assume a failing "test" is a real
  test failure; it may be a build or lint error.
- **Lint is bare `eslint`** — `next lint` no longer exists in Next 16 and will error.
