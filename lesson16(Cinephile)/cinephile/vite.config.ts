import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      images: "/src/assets/images",
      fonts: "/src/assets/fonts",
      styles: "/src/assets/styles",
      pages: "/src/pages",
      components: "/src/components",
      store: "/src/store"
    }
  }
})
