import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  define: {
    __APP_ENV__: process.env.VITE_API_KEY,
  },
  plugins: [react()],
});
