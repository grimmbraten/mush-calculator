module.exports = {
  bail: 1,
  verbose: true,
  testTimeout: 10000,
  collectCoverage: true,
  passWithNoTests: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./tests/setup.js'],
  coverageReporters: ['lcov', 'text-summary'],
  coveragePathIgnorePatterns: [
    'build',
    'tests',
    'src/routes',
    'src/config',
    'src/public',
    'node_modules'
  ],
  moduleNameMapper: {
    '~config': '<rootDir>/./src/config',
    '~tests/(.*)$': '<rootDir>/./tests/$1',
    '~hooks/(.*)$': '<rootDir>/./src/app/hooks/$1',
    '~contexts/(.*)$': '<rootDir>/./src/app/contexts/$1'
  }
};
