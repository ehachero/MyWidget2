import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/WebHelloReact.jsx', // El archivo donde defines tu Web Component
      name: 'MyWebComponent', // Nombre de la biblioteca, accesible como variable global
      fileName: (format) => `my-web-component.${format}.js`, // Nombre del archivo de salida
      formats: ['umd', 'es'], // Formatos para exportar: UMD para usar en el navegador y ES para importar
    },
    rollupOptions: {
      // Si tienes dependencias externas (p. ej., React), aquí las defines para que no se incluyan en el bundle
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    outDir: 'dist', // Directorio donde se generarán los archivos compilados
    emptyOutDir: true // Limpia el directorio de salida antes de cada compilación
  },
  plugins: [react()]
});
