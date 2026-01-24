import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-static-files',
      closeBundle() {
        // Copy docs directory
        const srcDocs = 'docs'
        const destDocs = 'dist/docs'
        if (!existsSync(destDocs)) {
          mkdirSync(destDocs, { recursive: true })
        }
        const docsFiles = ['index.html', 'example.html', 'somas-architecture.html', 'ai-dev-environment-setup.md', 'repository-analysis.md']
        docsFiles.forEach(file => {
          const srcFile = join(srcDocs, file)
          const destFile = join(destDocs, file)
          if (existsSync(srcFile)) {
            copyFileSync(srcFile, destFile)
          }
        })

        // Copy assets/css directory
        const srcCss = 'assets/css'
        const destCss = 'dist/assets/css'
        if (!existsSync(destCss)) {
          mkdirSync(destCss, { recursive: true })
        }
        const cssFile = 'style.css'
        const srcCssFile = join(srcCss, cssFile)
        const destCssFile = join(destCss, cssFile)
        if (existsSync(srcCssFile)) {
          copyFileSync(srcCssFile, destCssFile)
        }

        // Copy other static files
        const staticFiles = ['.nojekyll', 'robots.txt', 'sitemap.xml', '404.html']
        staticFiles.forEach(file => {
          if (existsSync(file)) {
            copyFileSync(file, join('dist', file))
          }
        })
      }
    }
  ],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
});
