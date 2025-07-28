import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { Buffer } from "buffer";

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensures proper relative paths for deployment
  define: {
    global: "globalThis",
    Buffer: "globalThis.Buffer",
    crypto: "require('crypto-browserify')", // Polyfill crypto
  },
});