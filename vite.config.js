import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Importante para rutas relativas en Vercel
  build: {
    lib: {
      entry: 'src/WebHelloReact.jsx', // Archivo de entrada para el Web Component
      name: 'MyWebComponent',
      fileName: (format) => `my-web-component.${format}.js`,
      formats: ['umd', 'es'], // UMD para usar en el navegador
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    outDir: 'dist', // Directorio de salida
    emptyOutDir: true
  },
  plugins: [react()]
});
