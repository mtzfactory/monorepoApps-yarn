const { name: displayName } = require('./package.json');

module.exports = {
  displayName,
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/test/setup-jest.js'],
  testMatch: ['**/*.test.(ts|tsx)'],
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/dist'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation|@monorepo-apps)',
  ],
};
