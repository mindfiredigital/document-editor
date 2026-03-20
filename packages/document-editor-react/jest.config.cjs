module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss|sass|less)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|svg|ttf|woff|woff2)$': '<rootDir>/__mocks__/fileMock.js',
    '^@mindfiredigital/canvas-editor$': '<rootDir>/__mocks__/canvas-editor.js',
  },
  testMatch: ['<rootDir>/component/src/__tests__/**/*.test.{ts,tsx}'],
  collectCoverageFrom: [
    'component/src/**/*.{ts,tsx}',
    '!component/src/**/*.d.ts',
    '!component/src/**/*.stories.{ts,tsx}',
  ],
  coverageDirectory: 'coverage',
  transformIgnorePatterns: ['/node_modules/(?!(@mui|@emotion)/)'],
};
