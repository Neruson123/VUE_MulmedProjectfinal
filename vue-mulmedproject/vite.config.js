import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), // Enable Vue 3 Single File Component support
    vueDevTools(), // Enable Vue DevTools for easier debugging
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) // Create '@' shortcut pointing to the 'src' folder
    },
  },
})
