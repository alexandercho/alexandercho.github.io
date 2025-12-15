// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const reactNative = require('eslint-plugin-react-native');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*', '.expo/*']
  },
  {
    files: ['**/*.tsx', '**/*.jsx'],
    plugins: {
      'react-native': reactNative
    },
    rules: {
      'react-native/no-unused-styles': 'warn',
      'comma-dangle': ['error', 'never'],
      'quotes': ['error', 'single'],
      'no-trailing-spaces': 'error'
    }
  }
]);
