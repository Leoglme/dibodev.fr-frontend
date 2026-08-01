<p align="center">
  <img src="./dibodev-logo.svg" width="240" alt="Dibodev" />
</p>

<h1 align="center">dibodev.fr</h1>

<p align="center">
  The freelance portfolio &amp; business website of Léo Guillaume (Dibodev) —<br />
  websites, apps, SaaS, APIs &amp; AI, from scoping to launch.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Nuxt-4-00DC82?logo=nuxt&logoColor=white" alt="Nuxt 4" />
  <img src="https://img.shields.io/badge/Vue-3.5-4FC08D?logo=vuedotjs&logoColor=white" alt="Vue 3.5" />
  <img src="https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Storyblok-headless%20CMS-09B3AF?logo=storyblok&logoColor=white" alt="Storyblok" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4" />
  <img src="https://img.shields.io/badge/PostHog-analytics-1D4AFF?logo=posthog&logoColor=white" alt="PostHog" />
</p>

<p align="center">
  <a href="https://dibodev.fr"><b>🌐 dibodev.fr</b></a>
</p>

---

## About

`dibodev.fr` is a multilingual (🇫🇷 / 🇬🇧 / 🇪🇸) freelance portfolio and business website built with **Nuxt 4** and a **Storyblok** headless CMS. Beyond the public site, it ships a private **admin dashboard** to run content and SEO operations — AI-assisted blog articles, Google indexing, translations and Lighthouse audits — without leaving the app.

## Features

### Public website

- **Multilingual** FR / EN / ES with localized routes and `hreflang` (`@nuxtjs/i18n`).
- **Projects showcase** — portfolio entries served from Storyblok, filterable by category and sector, with per-project SEO landing pages and JSON-LD.
- **Blog** — articles served from Storyblok, with reading time, tags and full SEO/OpenGraph metadata.
- **Contact funnel** — validated form (`vee-validate`) with transactional emails rendered via **MJML** and delivered through **Mailjet**.
- **SEO-first** — SSG output, auto-generated sitemap and robots, canonical + `hreflang` tags.

### Admin dashboard (`/dashboard`)

- **Article generator** — draft SEO blog articles (Mistral AI), pick a cover (Unsplash), publish to Storyblok.
- **Google indexing** — page-by-page indexing status from the Google Search Console API.
- **Translations** — one-click FR → EN / ES generation, committed back to the repo via the GitHub API.
- **SEO & performance audit** — per-page Lighthouse / PageSpeed reports.

## Tech stack

| Layer       | Tech                                                                               |
| ----------- | ---------------------------------------------------------------------------------- |
| Framework   | Nuxt 4, Vue 3.5, TypeScript (strict)                                               |
| Content     | Storyblok (headless CMS)                                                           |
| Styling     | Tailwind CSS v4                                                                    |
| i18n        | `@nuxtjs/i18n` (FR / EN / ES)                                                      |
| Forms       | vee-validate                                                                       |
| Email       | MJML + Mailjet                                                                     |
| Analytics   | PostHog (`@posthog/nuxt`, cookieless) &amp; Umami                                  |
| SEO tooling | Google Search Console API, PageSpeed Insights, `@nuxtjs/sitemap`, `@nuxtjs/robots` |
| AI          | Mistral (article generation)                                                       |
| Hosting     | OVH VPS (PM2) via GitHub Actions                                                   |

## Getting started

### Prerequisites

- Node.js 22+
- A `.env` file — copy `.env.example` and fill in the values you need (the app boots without most of them; content pages stay empty without a valid `NUXT_PUBLIC_STORYBLOK_ACCESS_TOKEN`).

### Install

```bash
npm install
```

### Develop

```bash
npm run dev
```

The dev server runs on **`https://localhost:3000`** (HTTPS via a self-signed `mkcert` certificate — accept the browser warning).

### Lint

```bash
npm run lint       # prettier + eslint + vue-tsc
npm run lint:fix   # auto-fix prettier + eslint
```

`npm run lint` also runs as a Husky pre-commit hook.

### Build

```bash
npm run build      # Nitro server build
npm run generate   # static site (SSG)
npm run preview    # preview a production build
```

## Analytics &amp; privacy

Two complementary tools, both privacy-conscious:

- **Umami** — lightweight, cookieless page analytics (production only).
- **PostHog** (`@posthog/nuxt`) — product analytics for the conversion funnel, configured **cookieless** (`persistence: 'memory'`, no consent banner). A first-party reverse proxy (anti-adblock) is a planned follow-up. Conversion events live in a single typed catalog (`app/core/constants/trackingEvents.ts`) and are emitted via the `useTracking` composable.

## Deployment

Push to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy-ovh.yml`), which builds the static site and the Nitro server and deploys both to an **OVH VPS**, where the server runs under **PM2** behind **Nginx**.

## Project structure

```
app/            Nuxt app — pages, components, composables, layouts, plugins
  components/   UI by type (core, sections, cards, blog, navigations, ui, icons…)
  core/         types, constants and utils
  pages/        public pages + /dashboard admin
server/         Nitro API routes and services (mail, GitHub, GSC)
content/        committed translation files (projects & articles, EN / ES)
i18n/locales/   UI translation keys (fr / en / es)
```

## Author

**Léo Guillaume** — Dibodev · [dibodev.fr](https://dibodev.fr) · [LinkedIn](https://www.linkedin.com/in/dibodev/) · [GitHub](https://github.com/Leoglme)
