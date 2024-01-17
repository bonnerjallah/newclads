import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  base: isProduction ? '/' : '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined, // Clearing manualChunks
      },
    },
  },
  esbuild: {
    jsxInject: `import React from 'react';`, // Add this line
  },
  jsx: 'react', // Add this line
});
