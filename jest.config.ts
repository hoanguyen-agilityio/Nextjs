import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const config: Config = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    // '<rootDir>/src/**/*.{js,jsx,ts,tsx}',
    // '!**/*.d.ts',
    // '!<rootDir>/src/**/*.stories.{js,jsx,ts,tsx}',
    // '!<rootDir>/node_modules/'
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/*.stories.tsx',
    '!src/assets/**',
    '!src/themes/**',
    '!src/types/**',
    '!src/mocks/**',
    '!src/constants/**',
    '!src/configs/**',
    '!src/components/index.ts',
    '!src/utils/index.ts',
    '!src/stores/index.ts',
    '!src/services/index.ts',
    '!src/hooks/index.ts',
    '!src/providers/index.ts',
    '!src/apis/index.ts',
    '!src/actions/index.ts',
    '!src/sections/index.ts',
    '!src/app/robots.ts',
    '!src/app/sitemap.ts',
    '!src/middleware.ts',
    '!__tests__/mocks/**',
    '!src/app/api/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '@components': '<rootDir>/src/components',
    '@constants': '<rootDir>/src/constants',
    '@themes': '<rootDir>/src/themes',
    '@providers': '<rootDir>/src/providers',
    '@assets': '<rootDir>/src/assets',
    '@utils': '<rootDir>/src/utils',
    '@mocks': '<rootDir>/src/mocks',
    '@services': '<rootDir>/src/services',
    '@apis': '<rootDir>/src/apis',
    '@hooks': '<rootDir>/src/hooks',
    '@sections': '<rootDir>/src/sections',
    '@actions': '<rootDir>/src/actions',
    '@configs': '<rootDir>/src/configs',
    '@components/*': '<rootDir>/src/components/*',
    '@sections/*': '<rootDir>/src/sections/*',
    '@configs/*': '<rootDir>/src/configs/*',
    '@/auth': '<rootDir>/__tests__/mocks/auth.ts',
    'next-auth/providers/credentials':
      '<rootDir>/__tests__/mocks/next-auth-providers-credentials.ts',
    'next-auth': '<rootDir>/__tests__/mocks/next-auth.ts',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  roots: ['<rootDir>/src'],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
