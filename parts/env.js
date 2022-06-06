'use strict';

// http://eslint.org/docs/user-guide/configuring#specifying-environments

module.exports = {
  // browser global variables.
  browser: false,
  // Node.js global variables and Node.js scoping.
  node: false,
  // CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack).
  commonjs: false,
  // Globals common to both Node and Browser.
  'shared-node-browser': false,
  // enable all ECMAScript 6 features except for modules.
  es6: false,
  // adds all ECMAScript 2016 globals and automatically sets the ecmaVersion parser option to 7.
  es2016: false,
  // adds all ECMAScript 2017 globals and automatically sets the ecmaVersion parser option to 8.
  es2017: false,
  // adds all ECMAScript 2018 globals and automatically sets the ecmaVersion parser option to 9.
  es2018: false,
  // adds all ECMAScript 2019 globals and automatically sets the ecmaVersion parser option to 10.
  es2019: false,
  // adds all ECMAScript 2020 globals and automatically sets the ecmaVersion parser option to 11.
  es2020: false,
  // adds all ECMAScript 2021 globals and automatically sets the ecmaVersion parser option to 12.
  es2021: false,
  // adds all ECMAScript 2022 globals and automatically sets the ecmaVersion parser option to 13.
  es2022: false,
  // web workers global variables.
  worker: false,
  // defines `require()` and `define()` as global variables as per the amd spec.
  amd: false,
  // adds all of the Mocha testing global variables.
  mocha: false,
  // adds all of the Jasmine testing global variables for version 1.3 and 2.0.
  jasmine: true,
  // Jest global variables.
  jest: false,
  // PhantomJS global variables.
  phantomjs: false,
  // Protractor global variables.
  protractor: false,
  // QUnit global variables.
  qunit: false,
  // jQuery global variables.
  jquery: false,
  // Prototype.js global variables.
  prototypejs: false,
  // ShellJS global variables.
  shelljs: false,
  // Meteor global variables.
  meteor: false,
  // MongoDB global variables.
  mongo: false,
  // AppleScript global variables.
  applescript: false,
  // Java 8 Nashorn global variables.
  nashorn: false,
  // Service Worker global variables.
  serviceworker: false,
  // Atom test helper globals.
  atomtest: false,
  // Ember test helper globals.
  embertest: false,
  // WebExtensions globals.
  webextensions: false,
  // GreaseMonkey globals.
  greasemonkey: false,
};
