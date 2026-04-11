# lifetimesoft-docs

Documentation site for Lifetime Soft services — built with [Hono](https://hono.dev/) and deployed on Cloudflare Workers.

## Stack

- **Framework** — Hono (JSX)
- **Styling** — Tailwind CSS v4
- **Interactivity** — Alpine.js
- **Runtime** — Cloudflare Workers
- **Language** — TypeScript

## Project Structure

```
src/
├── layout/
│   ├── layout.tsx      # Base HTML layout
│   ├── header.tsx      # Header component
│   └── footer.tsx      # Footer component
├── model/
│   ├── i18n.ts         # Thai/English translations
│   ├── services.ts     # Services data
│   └── const.tsx       # Constants (STATIC_PATH, etc.)
├── pages/
│   └── index.tsx       # Home page
├── alpine.js           # Alpine.js entry
├── input.css           # Tailwind CSS entry
└── index.tsx           # Hono app entry point
public/
├── css/style.css       # Built CSS
└── js/alpine.js        # Built Alpine.js
```

## Getting Started

Install dependencies:

```bash
npm install
```

Build static assets (CSS + JS):

```bash
npm run build
```

Start dev server:

```bash
npm run dev
```

## Commands

| Command | Description |
|---|---|
| `npm run build` | Build CSS and JS assets |
| `npm run build:css` | Build Tailwind CSS only |
| `npm run build:js` | Build Alpine.js only |
| `npm run dev` | Start local dev server (Wrangler) |
| `npm run deploy` | Build and deploy to Cloudflare Workers |

## i18n

The site supports Thai and English. Language is determined by:

1. `?lang=th` or `?lang=en` query parameter
2. `Accept-Language` header
3. Default: Thai (`th`)

## Deploy

```bash
npm run deploy
```

Deploys to Cloudflare Workers via Wrangler.
