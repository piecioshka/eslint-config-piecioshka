'use strict';

// Curated TypeScript-specific rules.
// https://typescript-eslint.io/rules/
//
// These sit on top of `plugin:@typescript-eslint/recommended` and reflect the
// strict style of the base (JavaScript) config. Only TS-specific rules live
// here; plain ESLint core rules stay in `parts/rules.js`.

module.exports = {
  // TypeScript already reports the use of undeclared variables.
  // https://typescript-eslint.io/troubleshooting/faqs/eslint/#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
  'no-undef': ['off'],

  // disallow the `any` type
  // https://typescript-eslint.io/rules/no-explicit-any/
  '@typescript-eslint/no-explicit-any': ['error'],

  // disallow unused variables (allow leading underscore to opt out)
  // https://typescript-eslint.io/rules/no-unused-vars/
  '@typescript-eslint/no-unused-vars': [
    'error',
    { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
  ],

  // disallow non-null assertions using the `!` postfix operator
  // https://typescript-eslint.io/rules/no-non-null-assertion/
  '@typescript-eslint/no-non-null-assertion': ['error'],

  // enforce consistent usage of type imports
  // https://typescript-eslint.io/rules/consistent-type-imports/
  '@typescript-eslint/consistent-type-imports': ['error'],

  // require consistently using either `T[]` or `Array<T>` for arrays
  // https://typescript-eslint.io/rules/array-type/
  '@typescript-eslint/array-type': ['error', { default: 'array' }],

  // enforce using the record type instead of index signatures
  // https://typescript-eslint.io/rules/consistent-indexed-object-style/
  '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],

  // disallow type assertions on object/array literals, but allow `as const`
  // and `x as T` elsewhere (the `never` style would also forbid `as const`).
  // https://typescript-eslint.io/rules/consistent-type-assertions/
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'never',
      arrayLiteralTypeAssertions: 'never',
    },
  ],
};
