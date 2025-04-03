import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Default output directory
  },
  server: {
    port: 3000, // Optional: Set a custom port for local development
  },
  resolve: {
    alias: {
      "@": "/src", // Optional: Alias for cleaner imports
    },
  },
});