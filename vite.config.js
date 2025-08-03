import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          utils: ['framer-motion', 'maath']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild',
    target: 'es2015',
    sourcemap: false,
    emptyOutDir: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'three', '@react-three/fiber'],
    exclude: ['@react-three/drei']
  },
  server: {
    host: true
  },
  define: {
    'process.env': {}
  },
  css: {
    postcss: './postcss.config.cjs'
  }
})
