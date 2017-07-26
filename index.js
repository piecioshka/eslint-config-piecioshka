'use strict';

module.exports = {
    // Tip:
    // To use Babel.js as ESLint parser: `npm install babel-eslint`
    // In next step uncomment that line:
    // "parser": "babel-eslint",

    "parserOptions": require('./parts/parser-options'),
    "rules": require('./parts/rules'),
    "env": require('./parts/env')
};
