import path from 'path'
import { fileURLToPath } from 'url'
import { copyFileSync } from 'fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from '@tailwindcss/vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Copy index.html to 404.html so GitHub Pages serves the SPA for client-side routes (e.g. /login, /login/callback).
function githubPagesSpaPlugin() {
  return {
    name: 'github-pages-spa',
    closeBundle() {
      if (process.env.VITE_BASE) {
        const outDir = path.join(process.cwd(), 'dist')
        copyFileSync(path.join(outDir, 'index.html'), path.join(outDir, '404.html'))
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE ?? '/', // Use '/' in dev; set VITE_BASE in CI for GitHub Pages (e.g. '/NewWebTemplate/')
  plugins: [react(), tailwind(), githubPagesSpaPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
