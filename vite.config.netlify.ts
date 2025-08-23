import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'src/static-site.html'
      }
    }
  },
  publicDir: 'public'
})