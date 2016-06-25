'use strict';

module.exports = {
    // Tip 1: To use Babel.js as ESLint parser:
    // `npm install babel-eslint`
    // In next step uncomment that line:
    // "parser": "babel-eslint",

    // Rules: http://eslint.org/docs/rules/
    // ------------------------------------
    "rules": require('./parts/rules'),

    // Specifying Language Options: http://eslint.org/docs/user-guide/configuring#specifying-language-options
    // ------------------------------------------------------------------------------------------------------

    "ecmaFeatures": require('./parts/ecmaFeatures'),

    // Specifying Environments: http://eslint.org/docs/user-guide/configuring#specifying-environments
    // ----------------------------------------------------------------------------------------------

    "env": require('./parts/env')
};
