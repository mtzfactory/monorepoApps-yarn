const { name: displayName } = require('./package.json');

module.exports = {
  displayName,
  moduleDirectories: ['node_modules', '../../node_modules'],
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/test/setup-jest.js', '@testing-library/jest-native/extend-expect'],
  testMatch: ['**/*.test.(ts|tsx)'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation)',
  ],
};
