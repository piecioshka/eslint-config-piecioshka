'use strict';

// Shareable TypeScript config (legacy `.eslintrc` / ESLint v8 format).
//
// Use it alongside the base config:
//
//   {
//     "extends": ["piecioshka", "piecioshka/typescript"]
//   }
//
// Docs: https://typescript-eslint.io/getting-started/

module.exports = {
  // https://typescript-eslint.io/packages/parser/
  parser: '@typescript-eslint/parser',

  // https://typescript-eslint.io/packages/eslint-plugin/
  plugins: ['@typescript-eslint'],

  // https://typescript-eslint.io/users/configs/#recommended
  extends: ['plugin:@typescript-eslint/recommended'],

  parserOptions: {
    // Support the latest ECMAScript syntax.
    ecmaVersion: 'latest',

    // Support ES2015 Import/Export.
    sourceType: 'module',
  },

  // https://typescript-eslint.io/rules/
  rules: require('./parts/typescript-rules'),
};
