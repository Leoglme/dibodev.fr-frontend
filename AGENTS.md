# AGENTS.md

## Cursor Cloud specific instructions

### Overview

This is **Dibodev** — a Nuxt 4 (Vue 3) freelance portfolio/business website. Single application, not a monorepo. No database, no Docker — content comes from Storyblok CMS.

### Dev commands

Standard scripts are in `package.json`. Key ones:

- **Dev server:** `npm run dev` — starts on `https://localhost:3000` (HTTPS via `vite-plugin-mkcert`, self-signed cert)
- **Lint:** `npm run lint` (runs prettier + eslint + vue-tsc sequentially)
- **Lint fix:** `npm run lint:fix`
- **Type check:** `npm run lint:ts`
- **Build:** `npm run build`

### Gotchas

- The dev server uses **HTTPS** (self-signed cert via mkcert). When testing in a browser, you must bypass the certificate warning.
- `server/services/mail/mail.config.ts` throws if `MAILJET_API_KEY` / `MAILJET_API_SECRET` are missing, but it is only loaded lazily when contact form endpoints are hit — the app starts fine without them.
- The `.env.example` file lists all env vars. Copy it to `.env` for local dev. The app will run without real values (most are optional), but content pages will be empty without a valid `NUXT_PUBLIC_STORYBLOK_ACCESS_TOKEN`.
- Husky pre-commit hook runs `npm run lint` — all 3 lint checks must pass before committing.
- `postinstall` script runs `nuxt prepare` automatically after `npm install`.
