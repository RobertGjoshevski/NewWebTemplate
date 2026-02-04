# NewWebTemplate

High-performance, SEO-friendly static website stack for GitHub Pages.

**Tech stack:** React (Vite) + TypeScript + Tailwind CSS + Shadcn UI + Keystatic (CMS).

## Getting started

```bash
npm install
npm run dev
```

- **Site:** [http://localhost:5173/](http://localhost:5173/)
- **Admin:** [http://localhost:5173/keystatic](http://localhost:5173/keystatic)

## Project structure

- **`/`** – Public website (home page).
- **`/keystatic`** – Keystatic admin entry. Content schema is in `keystatic.config.ts`; posts live in `src/content/posts/`. The full Keystatic Admin UI (with `makePage`) is provided by Remix, Next.js, or Astro. For Vite + React Router, update `storage.repo` in `keystatic.config.ts` and see [Keystatic docs](https://keystatic.com/docs) for Reader API and framework integrations.

## Keystatic

- **Config:** `keystatic.config.ts` (storage: GitHub; collection: `posts` with title, date, featuredImage, content/Markdoc).
- **Content path:** `src/content/posts/*`
- **Storage:** Repo is set to `RobertGjoshevski/NewWebTemplate`. Configure [GitHub mode](https://keystatic.com/docs/github-mode) (GitHub App, env vars) for the full admin UI in a supported framework.

## GitHub Pages

- **Base path:** Set in `vite.config.ts` via `VITE_BASE` (default: `/NewWebTemplate/`). The deploy workflow uses your repo name automatically.
- **Deploy:** Push to `main`; `.github/workflows/deploy.yml` builds and deploys to GitHub Pages.

## Scripts

| Command     | Description        |
|------------|--------------------|
| `npm run dev`   | Start dev server   |
| `npm run build` | Production build   |
| `npm run preview` | Preview production build |
| `npm run lint`  | Run ESLint         |
