import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/book-man-power-form.php': {
        target: 'http://localhost:80', // Change to your PHP server port (e.g., 80 for XAMPP)
        changeOrigin: true,
        rewrite: (path) => `/Man-Power${path}`,
      }
    }
  }
})
