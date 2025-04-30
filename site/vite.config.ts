import { defineConfig, UserConfig } from "vite";
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('vite').UserConfig} */
export default defineConfig({
  server: {
    host: true,
    port: 3000,
    strictPort: true
  },
  build: {
    outDir: './out',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        resume: resolve(__dirname, 'resume/index.html')
      }
    }
  },
  plugins: [],
  css: {},
} satisfies UserConfig);