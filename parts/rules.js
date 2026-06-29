'use strict';

// https://eslint.org/docs/rules/
//
// Only non-deprecated core rules are kept here (ESLint v8).
//
// Removed on purpose:
// - stylistic rules (indent, quotes, semi, spacing, ...) — handled by Prettier
// - Node.js/CommonJS rules — moved out of core to `eslint-plugin-n`
// - JSDoc rules (valid-jsdoc, require-jsdoc) — moved out of core to
//   `eslint-plugin-jsdoc`
//
// Renamed to their successors:
// - no-negated-in-lhs  -> no-unsafe-negation
// - no-native-reassign -> no-global-assign
// - id-blacklist       -> id-denylist
// - no-new-object      -> no-object-constructor

module.exports = {
  // Possible Errors: https://eslint.org/docs/rules/#possible-errors
  // --------------------------------------------------------------

  // disallow assignment operators in conditional expressions
  'no-cond-assign': ['error', 'always'],
  // disallow the use of `console`
  'no-console': ['warn'],
  // disallow constant expressions in conditions
  'no-constant-condition': ['error'],
  // disallow control characters in regular expressions
  'no-control-regex': ['error'],
  // disallow the use of `debugger`
  'no-debugger': ['error'],
  // disallow duplicate arguments in `function` definitions
  'no-dupe-args': ['error'],
  // disallow duplicate keys in object literals
  'no-dupe-keys': ['error'],
  // disallow duplicate case labels
  'no-duplicate-case': ['error'],
  // disallow empty block statements
  'no-empty': ['error'],
  // disallow empty character classes in regular expressions
  'no-empty-character-class': ['error'],
  // disallow reassigning exceptions in `catch` clauses
  'no-ex-assign': ['error'],
  // disallow unnecessary boolean casts
  'no-extra-boolean-cast': ['error'],
  // disallow reassigning `function` declarations
  'no-func-assign': ['error'],
  // disallow `function` or `var` declarations in nested blocks
  'no-inner-declarations': ['error'],
  // disallow invalid regular expression strings in `RegExp` constructors
  'no-invalid-regexp': ['error'],
  // disallow irregular whitespace outside of strings and comments
  'no-irregular-whitespace': ['error'],
  // disallow negating the left operand of relational operators
  'no-unsafe-negation': ['error'],
  // disallow calling global object properties as functions
  'no-obj-calls': ['error'],
  // Disallow use of `Object.prototypes` builtins directly
  'no-prototype-builtins': ['error'],
  // disallow multiple spaces in regular expression literals
  'no-regex-spaces': ['error'],
  // disallow sparse arrays
  'no-sparse-arrays': ['error'],
  // disallow confusing multiline expressions
  'no-unexpected-multiline': ['error'],
  // disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
  'no-unreachable': ['error'],
  // disallow control flow statements in `finally` blocks
  'no-unsafe-finally': ['error'],
  // require calls to `isNaN()` when checking for `NaN`
  'use-isnan': ['error'],
  // enforce comparing typeof expressions against valid strings
  'valid-typeof': ['error'],

  // Best Practices: https://eslint.org/docs/rules/#best-practices
  // ------------------------------------------------------------

  // enforce getter and setter pairs in objects
  'accessor-pairs': [
    'error',
    {
      getWithoutSet: true,
    },
  ],
  // enforce `return` statements in callbacks of array methods
  'array-callback-return': ['error'],
  // enforce the use of variables within the scope they are defined
  'block-scoped-var': ['error'],
  // enforce a maximum cyclomatic complexity allowed in a program
  complexity: ['error', 10],
  // require `return` statements to either always or never specify values
  'consistent-return': ['off'],
  // enforce consistent brace style for all control statements
  curly: ['error'],
  // require `default` cases in `switch` statements
  'default-case': ['warn'],
  // enforce dot notation whenever possible
  'dot-notation': [
    'error',
    {
      allowKeywords: true,
      allowPattern: '',
    },
  ],
  // require the use of `===` and `!==`
  eqeqeq: ['error'],
  // require `for-in` loops to include an `if` statement
  'guard-for-in': ['error'],
  // disallow the use of `alert`, `confirm`, and `prompt`
  'no-alert': ['warn'],
  // disallow the use of `arguments.caller` or `arguments.callee`
  'no-caller': ['error'],
  // disallow lexical declarations in case clauses
  'no-case-declarations': ['error'],
  // disallow division operators explicitly at the beginning of regular expressions
  'no-div-regex': ['error'],
  // disallow `else` blocks after `return` statements in `if` statements
  'no-else-return': ['off'],
  // disallow empty functions
  'no-empty-function': ['off'],
  // disallow empty destructuring patterns
  'no-empty-pattern': ['error'],
  // disallow `null` comparisons without type-checking operators
  'no-eq-null': ['error'],
  // disallow the use of `eval()`
  'no-eval': ['error'],
  // disallow extending native types
  'no-extend-native': [
    'error',
    {
      exceptions: ['Object', 'Function', 'Array'],
    },
  ],
  // disallow unnecessary calls to `.bind()`
  'no-extra-bind': ['error'],
  // disallow unnecessary labels
  'no-extra-label': ['error'],
  // disallow fallthrough of `case` statements
  'no-fallthrough': ['error'],
  // disallow shorthand type conversions
  'no-implicit-coercion': ['error'],
  // disallow `var` and named `function` declarations in the global scope
  'no-implicit-globals': ['error'],
  // disallow the use of `eval()`-like methods
  'no-implied-eval': ['error'],
  // disallow `this` keywords outside of classes or class-like objects
  'no-invalid-this': ['error'],
  // disallow the use of the `__iterator__` property
  'no-iterator': ['error'],
  // disallow labeled statements
  'no-labels': ['error'],
  // disallow unnecessary nested blocks
  'no-lone-blocks': ['error'],
  // disallow `function` declarations and expressions inside loop statements
  'no-loop-func': ['error'],
  // disallow magic numbers
  'no-magic-numbers': ['warn'],
  // disallow multiline strings
  'no-multi-str': ['error'],
  // disallow `new` operators outside of assignments or comparisons
  'no-new': ['warn'],
  // disallow `new` operators with the `Function` object
  'no-new-func': ['error'],
  // disallow `new` operators with the `String`, `Number`, and `Boolean` objects
  'no-new-wrappers': ['error'],
  // disallow octal literals
  'no-octal': ['error'],
  // disallow octal escape sequences in string literals
  'no-octal-escape': ['error'],
  // disallow reassigning `function` parameters
  'no-param-reassign': [
    'error',
    {
      props: false,
    },
  ],
  // disallow the use of the `__proto__` property
  'no-proto': ['error'],
  // disallow `var` redeclaration
  'no-redeclare': [
    'error',
    {
      builtinGlobals: true,
    },
  ],
  // disallow assignment operators in `return` statements
  'no-return-assign': ['error'],
  // disallow `javascript:` urls
  'no-script-url': ['error'],
  // disallow assignments where both sides are exactly the same
  'no-self-assign': ['error'],
  // disallow comparisons where both sides are exactly the same
  'no-self-compare': ['error'],
  // disallow comma operators
  'no-sequences': ['error'],
  // disallow throwing literals as exceptions
  'no-throw-literal': ['error'],
  // disallow unmodified loop conditions
  'no-unmodified-loop-condition': ['error'],
  // disallow unused expressions
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: false,
      allowTernary: false,
    },
  ],
  // disallow unused labels
  'no-unused-labels': ['error'],
  // disallow unnecessary calls to `.call()` and `.apply()`
  'no-useless-call': ['error'],
  // disallow unnecessary concatenation of literals or template literals
  'no-useless-concat': ['error'],
  // disallow unnecessary escape characters
  'no-useless-escape': ['error'],
  // disallow `void` operators
  'no-void': ['off'],
  // disallow specified warning terms in comments
  'no-warning-comments': [
    'warn',
    {
      terms: ['todo', 'fixme', 'xxx'],
      location: 'anywhere',
    },
  ],
  // disallow `with` statements
  'no-with': ['error'],
  // enforce the consistent use of the radix argument when using `parseInt()`
  radix: ['error'],
  // require `var` declarations be placed at the top of their containing scope
  'vars-on-top': ['warn'],
  // require or disallow "Yoda" conditions
  yoda: [
    'error',
    'never',
    {
      exceptRange: false,
      onlyEquality: false,
    },
  ],

  // Strict Mode: https://eslint.org/docs/rules/#strict-mode
  // ------------------------------------------------------

  // require or disallow strict mode directives
  strict: ['off'],

  // Variables: https://eslint.org/docs/rules/#variables
  // --------------------------------------------------

  // require or disallow initialization in `var` declarations
  'init-declarations': ['off'],
  // disallow reassigning read-only global variables
  'no-global-assign': ['error'],
  // disallow deleting variables
  'no-delete-var': ['error'],
  // disallow labels that share a name with a variable
  'no-label-var': ['error'],
  // disallow specified global variables
  'no-restricted-globals': ['error'],
  // disallow `var` declarations from shadowing variables in the outer scope
  'no-shadow': [
    'error',
    {
      builtinGlobals: false,
      hoist: 'functions',
      allow: [],
    },
  ],
  // disallow identifiers from shadowing restricted names
  'no-shadow-restricted-names': ['error'],
  // disallow the use of undeclared variables unless mentioned in `/*global */` comments
  'no-undef': [
    'error',
    {
      typeof: true,
    },
  ],
  // disallow initializing variables to `undefined`
  'no-undef-init': ['off'],
  // disallow the use of `undefined` as an identifier
  'no-undefined': ['error'],
  // disallow unused variables
  'no-unused-vars': [
    'error',
    {
      vars: 'all',
      args: 'after-used',
      varsIgnorePattern: '^_',
      argsIgnorePattern: '^_',
    },
  ],
  // disallow the use of variables before they are defined
  'no-use-before-define': ['off'],

  // Stylistic Issues: handled by Prettier, only non-formatting rules kept
  // --------------------------------------------------------------------

  // enforce camelcase naming convention
  camelcase: [
    'error',
    {
      properties: 'always',
    },
  ],
  // enforce consistent naming when capturing the current execution context
  'consistent-this': ['error', 'self'],
  // require or disallow named `function` expressions
  'func-names': ['off'],
  // enforce the consistent use of either `function` declarations or expressions
  'func-style': ['off'],
  // disallow specified identifiers
  'id-denylist': [
    'error',
    // I didn't know, that it is error or event.
    'e',
  ],
  // enforce minimum and maximum identifier lengths
  'id-length': [
    'error',
    {
      min: 1,
      max: 100,
      properties: 'always',
      exceptions: ['x'],
    },
  ],
  // require identifiers to match a specified regular expression
  'id-match': [
    'error',
    '',
    {
      properties: false,
    },
  ],
  // enforce a maximum depth that blocks can be nested
  'max-depth': ['error', 10],
  // enforce a maximum file length
  'max-lines': [
    'error',
    {
      max: 1000,
      skipBlankLines: true,
      skipComments: true,
    },
  ],
  // enforce a maximum depth that callbacks can be nested
  'max-nested-callbacks': ['error', 5],
  // enforce a maximum number of parameters in `function` definitions
  'max-params': ['error', 10],
  // enforce a maximum number of statements allowed in `function` blocks
  'max-statements': ['error', 15],
  // require constructor `function` names to begin with a capital letter
  'new-cap': [
    'error',
    {
      newIsCap: true,
      capIsNew: true,
      newIsCapExceptions: [],
      capIsNewExceptions: [],
      properties: true,
    },
  ],
  // disallow `Array` constructors
  'no-array-constructor': ['error'],
  // disallow bitwise operators
  'no-bitwise': ['error'],
  // disallow `continue` statements
  'no-continue': ['warn'],
  // disallow inline comments after code
  'no-inline-comments': ['off'],
  // disallow `if` statements as the only statement in `else` blocks
  'no-lonely-if': ['error'],
  // disallow negated conditions
  'no-negated-condition': ['error'],
  // disallow nested ternary expressions
  'no-nested-ternary': ['error'],
  // disallow `Object` constructors
  'no-object-constructor': ['error'],
  // disallow the unary operators `++` and `--`
  'no-plusplus': ['off'],
  // disallow specified syntax
  'no-restricted-syntax': ['error', 'WithStatement'],
  // disallow ternary operators
  'no-ternary': ['off'],
  // disallow dangling underscores in identifiers
  'no-underscore-dangle': ['off'],
  // disallow ternary operators when simpler alternatives exist
  'no-unneeded-ternary': [
    'error',
    {
      defaultAssignment: true,
    },
  ],
  // enforce variables to be declared either together or separately in functions
  'one-var': ['off'],
  // require or disallow assignment operator shorthand where possible
  'operator-assignment': ['error', 'always'],
  // require variables within the same declaration block to be sorted
  'sort-vars': ['off'],
  // require or disallow the Unicode BOM
  'unicode-bom': ['error', 'never'],

  // ECMAScript 6: https://eslint.org/docs/rules/#ecmascript-6
  // --------------------------------------------------------

  // require braces around arrow function bodies
  'arrow-body-style': ['off'],
  // require `super()` calls in constructors
  'constructor-super': ['error'],
  // disallow reassigning class members
  'no-class-assign': ['error'],
  // disallow reassigning `const` variables
  'no-const-assign': ['error'],
  // disallow duplicate class members
  'no-dupe-class-members': ['error'],
  // disallow duplicate module imports
  'no-duplicate-imports': [
    'error',
    {
      includeExports: false,
    },
  ],
  // disallow `new` operators with the `Symbol` object
  'no-new-symbol': ['error'],
  // disallow specified modules when loaded by `import`
  'no-restricted-imports': ['off'],
  // disallow `this` / `super` before calling `super()` in constructors
  'no-this-before-super': ['error'],
  // disallow unnecessary computed property keys in object literals
  'no-useless-computed-key': ['error'],
  // disallow unnecessary constructors
  'no-useless-constructor': ['off'],
  // disallow renaming import, export, and destructured assignments to the same name
  'no-useless-rename': ['error'],
  // require `let` or `const` instead of `var`
  'no-var': ['error'],
  // require or disallow method and property shorthand syntax for object literals
  'object-shorthand': ['error', 'always'],
  // require arrow functions as callbacks
  'prefer-arrow-callback': ['error'],
  // require `const` declarations for variables that are never reassigned after declared
  'prefer-const': ['off'],
  // require rest parameters instead of `arguments`
  'prefer-rest-params': ['off'],
  // require spread operators instead of `.apply()`
  'prefer-spread': ['error'],
  // require template literals instead of string concatenation
  'prefer-template': ['error'],
  // require generator functions to contain `yield`
  'require-yield': ['error'],
  // enforce sorted import declarations within modules
  'sort-imports': ['off'],
};
