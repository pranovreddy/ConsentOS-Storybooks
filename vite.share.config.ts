import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { fileURLToPath } from 'node:url'

// One self-contained HTML file. scripts/precompile-share.mjs compiles story templates first, so no eval is needed.
export default defineConfig({
  root: 'src/share',
  plugins: [vue(), tailwindcss(), viteSingleFile()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  build: { outDir: '../../share', emptyOutDir: true, assetsInlineLimit: 100000000 },
})
