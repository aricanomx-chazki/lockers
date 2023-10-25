import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      tests: '/src/__tests__/',
      assets: '/src/assets',
      components: '/src/components',
      configs: '/src/configs',
      contexts: '/src/contexts',
      routes: '/src/routes',
      screens: '/src/screens',
      stories: '/src/stories',
      types: '/src/types',
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    testMatch: ['./tests/**/*.test.tsx'],
    globals: true,
  },
});
