import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['5173-madesh035-task-kceej4b1uy.app.codeanywhere.com'],
  },
  plugins: [react(), tailwindcss()],
})
