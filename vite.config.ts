// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/zallen-funebre/", // 👈 nome do seu repositório no GitHub
});
