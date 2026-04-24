module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/*.test.js'],
  collectCoverageFrom: ['**/*.js', '!**/node_modules/**', '!**/jest.config.js'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  verbose: true,
};
