# Murad Magharbeh — Architect (website source export)

Full source code of the website project, packaged for archival or redeployment
on another host.

## What's inside

```
app/
  src/                 React 19 + TanStack Start source
    routes/            file-based routes (/, /app, robots.txt, sitemap.xml)
    components/        UI components
    layouts/           page layouts
    lib/               helpers, bindings, generation results
    assets/            imported source assets
    styles.css         global styles (Tailwind v4 + design tokens)
    landing-content.ts, scroll-scrub-scenes.ts   page content & scroll film scenes
  public/              static assets served as-is
    assets/            project imagery (landing, portfolio, projects, world, meta)
    favicon*, icons, site.webmanifest, presets/
  migrations/          D1 SQL migrations (0001_init.sql)
  package.json, bun.lock, bunfig.toml
  vite.config.ts, tsconfig.json, tsr.config.json, eslint.config.js, .prettierrc
  wrangler.jsonc       Cloudflare Worker build/dev config
  app.manifest.json    infrastructure declaration (db/r2/kv/durable object)
  design-brief.md      the design brief used to build the site
  scripts/, tests/     build helpers and tests
```

## Stack

- React 19 + TanStack Start, server-rendered (SSR).
- Builds to a single Cloudflare Worker: `dist/server/server.js` (Worker entry)
  plus `dist/client` (static assets).
- Styling: Tailwind CSS v4 (`app/src/styles.css`).
- Package manager: bun (`bun.lock`).

## Run locally

```
cd app
bun install
bun run dev        # local dev server
bun run build      # production build -> dist/
bun run preview    # preview the production build
```

## Notes on redeploying elsewhere

- The production target is a Cloudflare Worker (SSR). Any host that can run a
  Worker, or a Node/serverless runtime capable of serving the built SSR handler
  and the `dist/client` static assets, can host it. Point the Worker entry at
  `dist/server/server.js` and serve `dist/client` as static assets.
- `app.manifest.json` currently declares no extra infrastructure
  (`db/r2/kv/durableObject` all off), so no database or object storage is
  required to run the site.
- A few UI building blocks come from Higgsfield platform packages that are not
  part of this export and are managed by the hosting platform. If you redeploy
  outside that platform, replace those imports with your own equivalents or
  keep the site on its current host. The site's own code, content, imagery and
  styling are all included here.
- Secrets/API keys are never stored in the source; configure them on your host.
