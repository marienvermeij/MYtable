import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  publicDir: 'public',
  // 👇 DIT IS DE FIX: zorgt dat bedankt.html altijd wordt meegenomen
  assetsInclude: ['**/*.html'],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
