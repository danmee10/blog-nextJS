import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    include: [
      '**/*.{test,spec}.{ts,tsx}', 
    ],
    exclude: [
      'node_modules',
      '.next',
      'dist',
    ],
  },
});