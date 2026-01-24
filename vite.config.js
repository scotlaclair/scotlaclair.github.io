import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync, existsSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-static-files',
      closeBundle() {
        // Copy docs directory - dynamically include all files
        const srcDocs = 'docs'
        const destDocs = 'dist/docs'
        if (!existsSync(destDocs)) {
          mkdirSync(destDocs, { recursive: true })
        }
        if (existsSync(srcDocs)) {
          const docsFiles = readdirSync(srcDocs)
          docsFiles.forEach(file => {
            const srcFile = join(srcDocs, file)
            const destFile = join(destDocs, file)
            try {
              // Only copy files, not directories
              if (statSync(srcFile).isFile()) {
                copyFileSync(srcFile, destFile)
              }
            } catch (error) {
              console.warn(`Could not copy ${srcFile}:`, error.message)
            }
          })
        }

        // Copy assets/css directory
        const srcCss = 'assets/css'
        const destCss = 'dist/assets/css'
        if (!existsSync(destCss)) {
          mkdirSync(destCss, { recursive: true })
        }
        if (existsSync(srcCss)) {
          const cssFiles = readdirSync(srcCss)
          cssFiles.forEach(file => {
            const srcFile = join(srcCss, file)
            const destFile = join(destCss, file)
            try {
              // Only copy files, not directories
              if (statSync(srcFile).isFile()) {
                copyFileSync(srcFile, destFile)
              }
            } catch (error) {
              console.warn(`Could not copy ${srcFile}:`, error.message)
            }
          })
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
