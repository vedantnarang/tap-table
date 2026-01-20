import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['lucide-react'],
  },
  server: {
    host: true,
    allowedHosts: ['.ngrok-free.dev', '.ngrok.io'],
    hmr: {
      clientPort: 443,
    },
  },
  preview: {
    host: true,
  },
})
