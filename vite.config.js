import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, 
  },
  build: {
    outDir: 'dist', 
    rollupOptions: {
      input: '/index.html',
    },
  },
  publicDir: 'public', 
  base: '/', 
});
