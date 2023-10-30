import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: './src/index.ts',
      formats: ['cjs', 'umd', 'es'],
      name: 'ui',
      fileName: (format) => {
        return `index.${format}.js`;
      },
    },
  },
  plugins: [react()],
});
