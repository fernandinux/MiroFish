export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    open: true,
    allowedHosts: ['mirofish-fewg.onrender.com'], // 👈 Agrega esta línea
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
