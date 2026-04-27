import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // No quitar estos plugins
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      // Alias @ → src
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    host: true,
    allowedHosts: true
  },

  // Tipos de archivos permitidos como assets
  assetsInclude: ['**/*.svg', '**/*.csv'],
})