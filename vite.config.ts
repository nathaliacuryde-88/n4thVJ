import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Relative asset URLs, so the same build works at a domain root, under a
  // GitHub Pages sub-path (/n4thVJ/), or straight off the filesystem.
  base: './',
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
