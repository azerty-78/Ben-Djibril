import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  server: {
    port: 5180,
    host: true,
    allowedHosts: [
      '2a2ba9adf6ba.ngrok-free.app',
      '.ngrok-free.app',
      '.ngrok.io',
    ],
  },
})

