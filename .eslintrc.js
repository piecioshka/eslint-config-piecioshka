module.exports = {
  parserOptions: {
    ...require("./parts/parser-options"),

    // Support syntax ES2018
    ecmaVersion: 2018,

    // Support syntax ES2015 Import/Export
    sourceType: "module",
  },

  // http://eslint.org/docs/user-guide/configuring#specifying-environments
  env: {
    ...require("./parts/env"),
    node: true,
  },

  // http://eslint.org/docs/rules/
  rules: {
    ...require("./parts/rules"),
    indent: ["error", 2],
    "global-require": "off",
    "no-magic-numbers": "off",
  },

  // List of global variables.
  globals: {},
};
