// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/zallen-funebre/', // 👈 isso aqui é obrigatório pro Pages
})
