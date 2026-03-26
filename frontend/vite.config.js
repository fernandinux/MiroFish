import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,        // Permite conexiones desde cualquier host
    allowedHosts: 'all' // Alternativa moderna (Vite 4+)
  }
})
