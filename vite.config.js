import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    cors: true,
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8'
    }
  },
  preview: {
    host: '0.0.0.0',
    port: 3000,
    cors: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion'],
          utils: ['react-helmet-async', 'react-intersection-observer', 'react-icons']
        }
      }
    }
  }
})