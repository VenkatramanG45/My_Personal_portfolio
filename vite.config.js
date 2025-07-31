import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: "./", // Ensures proper relative paths for deployment
  optimizeDeps: {
    include: [
      'react-tilt',
      'react-vertical-timeline-component',
      '@emailjs/browser',
      'maath/random/dist/maath-random.esm'
    ]
  }
});