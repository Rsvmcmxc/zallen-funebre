import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Se estiver usando outro framework, mantenha os plugins certos
export default defineConfig({
  plugins: [react()],
  base: './', // 👈 ISSO resolve o "site branco" no GitHub Pages
})
