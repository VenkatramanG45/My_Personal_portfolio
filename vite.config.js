import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensures proper relative paths for deployment
  build: {
    rollupOptions: {
      external: ["react-router-dom"], // Externalize react-router-dom
    },
  },
});