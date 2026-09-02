import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src/app', import.meta.url)),
    },
  },
  build: {
    // three.js plus the renderers land well over Rollup's 500 kB default.
    chunkSizeWarningLimit: 1200,
  },
});
