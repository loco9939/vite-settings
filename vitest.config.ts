import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
    coverage: {
      // exclude: ['./tests/*.ts', './tests-examples/*.ts'],
    },
  },
});
