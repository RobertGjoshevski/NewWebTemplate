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

## Deploy to GitHub Pages

1. **Enable GitHub Pages**
   - In your repo: **Settings → Pages**
   - Under **Build and deployment**, set **Source** to **GitHub Actions**

2. **Deploy**
   - Push to the `main` branch. The workflow `.github/workflows/deploy.yml` builds and deploys the site.
   - Your site will be at: `https://<your-username>.github.io/<repo-name>/`  
     (e.g. `https://robertgjoshevski.github.io/NewWebTemplate/`)

3. **Admin login (GitHub OAuth) on the live site**
   - Create a [GitHub OAuth App](https://github.com/settings/developers):
     - **Application name:** e.g. "Артистик Дизајн Admin"
     - **Homepage URL:** your GitHub Pages URL, e.g. `https://<username>.github.io/NewWebTemplate/`
     - **Authorization callback URL:**  
       `https://<username>.github.io/<repo-name>/login/callback`  
       (e.g. `https://robertgjoshevski.github.io/NewWebTemplate/login/callback`)
   - Copy the **Client ID**.
   - In the repo: **Settings → Secrets and variables → Actions** → **New repository secret**
   - Name: `VITE_GITHUB_CLIENT_ID`, Value: your Client ID
   - Push a new commit to `main` to trigger a rebuild; the deployed site will then use GitHub for admin sign-in.

**Note:** Client-side routes (e.g. `/login`, `/login/callback`) work on GitHub Pages because the build copies `index.html` to `404.html`, so the SPA loads for any path.

### White or blank page after deploy

1. **Use GitHub Actions, not “Deploy from a branch”**  
   In **Settings → Pages**, set **Source** to **GitHub Actions**. If you use “Deploy from a branch”, the site is built with the wrong base path and assets 404 → white screen.

2. **Open the correct URL**  
   The site is under the repo name:  
   `https://<your-username>.github.io/<repo-name>/`  
   Example: `https://robertgjoshevski.github.io/NewWebTemplate/`  
   Opening `https://<your-username>.github.io/` (without the repo name) will not show this app.

3. **Redeploy after switching to GitHub Actions**  
   After changing the Pages source to GitHub Actions, push a commit to `main` so the workflow runs and deploys a new build.

4. **Check the Actions log**  
   In the **Actions** tab, open the latest “Deploy to GitHub Pages” run. The “Verify base path in build” step should pass and show the site URL. If the build step failed, fix the error and push again.

## Scripts

| Command     | Description        |
|------------|--------------------|
| `npm run dev`   | Start dev server   |
| `npm run build` | Production build   |
| `npm run preview` | Preview production build |
| `npm run lint`  | Run ESLint         |
