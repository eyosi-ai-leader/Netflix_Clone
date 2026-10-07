import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NETLIFY ? '/' : '/Netflix_Clone/', // Netlify serves from the root; GitHub Pages serves from /Netflix_Clone/
})
