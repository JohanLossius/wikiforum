// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Explicitly set the port (default is 5173)
    host: true, // Allow access from network (useful if testing on other devices)
    strictPort: true, // Fail if the specified port is unavailable
    hmr: {
      overlay: true, // Show error overlay in browser for HMR issues
      clientPort: 5173, // Ensure HMR connects on the correct port
    },
  },
  resolve: {
    alias: {
      // Add aliases if needed for easier imports (optional)
      '@': '/src', // Example: Map '@' to 'src' folder for imports like import from '@/component'
    },
  },
  build: {
    target: 'esnext', // Ensure modern JavaScript output
    minify: 'terser', // Use terser for minification (default)
  },
})