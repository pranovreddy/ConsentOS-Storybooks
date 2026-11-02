import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

// Library build: dist/index.js and dist/style.css. Vue, reka-ui and Lucide stay external.
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  build: {
    emptyOutDir: false,
    cssCodeSplit: false,
    lib: { entry: 'src/index.ts', formats: ['es'], fileName: 'index', cssFileName: 'style' },
    rollupOptions: { external: ['vue', 'reka-ui', '@lucide/vue'] },
  },
})
