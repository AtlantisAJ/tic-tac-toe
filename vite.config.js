import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/atlantisaj.github.io/', // Замените на имя вашего репозитория (например, 'tic-tac-toe')
  build: {
    outDir: 'dist', // Убедитесь, что сборка идёт в папку dist
  },
});
