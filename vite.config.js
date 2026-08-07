import { defineConfig } from 'vite';
import flatland from '@bernhardfritz/flatland/vite-plugin';

export default defineConfig({
  plugins: [
    flatland(),
  ],
  server: {
    host: '127.0.0.1',
  },
});