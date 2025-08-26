import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Dev-Michael-React/', // 👈 add this line (your repo name)
  server: {
    port: 5173,
  },
})
