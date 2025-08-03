import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    target: 'es2020',
    sourcemap: false,
    emptyOutDir: true,
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true
      },
      mangle: {
        keep_fnames: true
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'three', '@react-three/fiber'],
    exclude: ['@react-three/drei']
  },
  server: {
    host: true
  },
  define: {
    'process.env': process.env
  },
  css: {
    postcss: './postcss.config.cjs'
  }
})
