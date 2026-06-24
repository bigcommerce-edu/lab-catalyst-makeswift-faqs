import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    // The units under test are pure logic and the server-only SQLite layer,
    // so the Node environment is sufficient (no DOM/React rendering).
    environment: 'node',
    include: ['components/**/*.test.ts'],
    // Keep Vitest away from the Playwright suite (tests/**, *.spec.ts).
    exclude: ['node_modules', '.next', 'tests/**'],
  },
});
