// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'nodejs'],
  rules: {
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'error',
    'react/display-name': 'off',
  },
  globals: {
    process: true
  }
};
