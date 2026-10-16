# Murad Magharbeh — Architect (portfolio website)

Standalone source of the portfolio website: React 19 + TanStack Start, server-rendered
and deployed as a single Cloudflare Worker.

This project is self-contained — it installs, builds and deploys without any
Higgsfield-internal packages.

## Stack

- React 19 + TanStack Start (SSR)
- Vite 8 + TypeScript
- Tailwind CSS v4 (styles in `app/src/styles.css`)
- Build output: one Cloudflare Worker (`dist/server/server.js`) plus static assets (`dist/client`)
- Package manager: bun

## Layout

```
app/
  src/
    routes/          file-based routes: /, robots.txt, sitemap.xml, root layout
    components/      React components
    lib/             helpers, server-only modules, Cloudflare bindings
    module/          design-inspector bridge used by the Vite config
    assets/          imported source assets
    styles.css       global styles (Tailwind v4 + the site's design tokens)
    server.ts        Worker entry (`export default { fetch }`)
    start.ts         TanStack Start instance (middleware)
  public/            static files served as-is
    assets/          project imagery: projects, portfolio, world, meta
    favicons, site.webmanifest, presets/
  migrations/        D1 migrations (no database is required to run the site)
  tests/             bun tests
  scripts/           build helpers
  wrangler.jsonc     Cloudflare Worker config
  app.manifest.json  infrastructure declaration (db/r2/kv/do all off)
```

## Develop

```
cd app
bun install
bun run dev        # local dev server
```

## Build

```
cd app
bun run build      # -> dist/server/server.js + dist/client
bun run preview    # preview the production build
```

The build runs `check:ui`, regenerates the route tree, type-checks with `tsc`, then
bundles with Vite.

## Deploy to Cloudflare Workers

`app/wrangler.jsonc` is already configured for this project:

- `main` points at the built Worker entry `dist/server/server.js`
- `assets.directory` serves `dist/client`
- no D1 / R2 / KV / Durable Object bindings are required

```
cd app
bun run build
bunx wrangler deploy        # after `wrangler login`
```

Change the Worker `name` in `app/wrangler.jsonc` if you want a different address, and
put any secrets in Cloudflare (or a local `.dev.vars`) — never in source. The
`HF_ENV` / `APP_SLUG` vars there are informational only.

## `legacy-higgsfield-scaffold/`

Kept for reference only and **not part of the build**. It holds the unused pieces of
the original hosting template — a generator-UI component kit and an `/app` demo route —
which depend on Higgsfield-internal packages (`@higgsfield/quanta`, `@higgsfield/fnf`,
`@higgsfield/app-landing`) that are not published on npm. Nothing in the portfolio site
imports them, so the project builds and deploys without them. Safe to delete.

## Content

The portfolio page (`app/src/routes/index.tsx`) and its styles are unchanged. All
images, videos, routes, animations and responsive layout are preserved.
