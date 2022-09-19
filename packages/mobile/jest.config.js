const { name: displayName } = require('./package.json');

module.exports = {
  displayName,
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    // '@monorepo-apps/(.*)$': '<rootDir>/../../packages/$1/src',
    //'react-native': '<rootDir>/node_modules/react-native',
  },
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/test/setup-jest.js'],
  testMatch: ['**/*.test.(ts|tsx)'],
  testPathIgnorePatterns: ['<rootDir>/node_modules'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation|@monorepo-apps)',
  ],
};
