import { defineConfig } from 'vite';
import build from '@hono/vite-build/cloudflare-pages';
import devServer from '@hono/vite-dev-server';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    build(),
    devServer({
      entry: 'src/index.ts',
    }),
  ],
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'public/index.html'),
      },
    },
    copyPublicDir: true,
  },
  server: {
    port: 3000,
    host: true,
  },
});