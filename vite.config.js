import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/react task/"   // ← this MUST match your repo name EXACTLY
})
