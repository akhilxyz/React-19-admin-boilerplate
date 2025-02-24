import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path'
import process from 'node:process'
import tailwindcss from '@tailwindcss/vite';
import Icons from 'unplugin-icons/vite'
// import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
    Icons({ compiler: 'jsx', jsx: 'react' })
  ],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs'],
  },
  server: {
    open: true,
    port: 5173,
    host: '0.0.0.0',
    cors: true,
    proxy: {
      '^/api/.*': {
        target: 'https://www.myapp.com',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    hmr: {
      overlay: false, // Disable the warning overlay in the browser
    },
  },
  // *console.log && debugger
  esbuild: {
    pure: ['console.log', 'debugger'],
  },
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        // Static resource classification and packaging
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },
})


