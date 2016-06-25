'use strict';

module.exports = {
    // Possible Errors: http://eslint.org/docs/rules/#possible-errors
    // --------------------------------------------------------------

    // require or disallow trailing commas
    "comma-dangle": [2, "never"],
    // disallow assignment operators in conditional expressions
    "no-cond-assign": [2, "always"],
    // disallow the use of `console`
    "no-console": [1],
    // disallow constant expressions in conditions
    "no-constant-condition": [2],
    // disallow control characters in regular expressions
    "no-control-regex": [2],
    // disallow the use of `debugger`
    "no-debugger": [2],
    // disallow duplicate arguments in `function` definitions
    "no-dupe-args": [2],
    // disallow duplicate keys in object literals
    "no-dupe-keys": [2],
    // disallow duplicate case labels
    "no-duplicate-case": [2],
    // disallow empty block statements
    "no-empty": [2],
    // disallow empty character classes in regular expressions
    "no-empty-character-class": [2],
    // disallow reassigning exceptions in `catch` clauses
    "no-ex-assign": [2],
    // disallow unnecessary boolean casts
    "no-extra-boolean-cast": [2],
    // disallow unnecessary parentheses
    "no-extra-parens": [2, "functions"],
    // disallow unnecessary semicolons
    "no-extra-semi": [2],
    // disallow reassigning `function` declarations
    "no-func-assign": [2],
    // disallow `function` or `var` declarations in nested blocks
    "no-inner-declarations": [2],
    // disallow invalid regular expression strings in `RegExp` constructors
    "no-invalid-regexp": [2],
    // disallow irregular whitespace outside of strings and comments
    "no-irregular-whitespace": [2],
    // disallow negating the left operand in `in` expressions
    "no-negated-in-lhs": [2],
    // disallow calling global object properties as functions
    "no-obj-calls": [2],
    // Disallow use of `Object.prototypes` builtins directly
    "no-prototype-builtins": [2],
    // disallow multiple spaces in regular expression literals
    "no-regex-spaces": [2],
    // disallow sparse arrays
    "no-sparse-arrays": [2],
    // disallow confusing multiline expressions
    "no-unexpected-multiline": [2],
    // disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
    "no-unreachable": [2],
    // disallow control flow statements in `finally` blocks
    "no-unsafe-finally": [2],
    // require calls to `isNaN()` when checking for `NaN`
    "use-isnan": [2],
    // enforce valid JSDoc comments
    "valid-jsdoc": [2, {
        "prefer": {},
        "requireParamDescription": true,
        "requireReturn": false,
        "requireReturnDescription": false
    }],
    // enforce comparing typeof expressions against valid strings
    "valid-typeof": [2],

    // Best Practices: http://eslint.org/docs/rules/#best-practices
    // ------------------------------------------------------------

    // enforce getter and setter pairs in objects
    "accessor-pairs": [2, {
        "getWithoutSet": true
    }],
    // enforce `return` statements in callbacks of array methods
    "array-callback-return": [2],
    // enforce the use of variables within the scope they are defined
    "block-scoped-var": [2],
    // enforce a maximum cyclomatic complexity allowed in a program
    "complexity": [2, 10],
    // require `return` statements to either always or never specify values
    "consistent-return": [2],
    // enforce consistent brace style for all control statements
    "curly": [2],
    // require `default` cases in `switch` statements
    "default-case": [2],
    // enforce consistent newlines before and after dots
    "dot-location": [2, "property"],
    // enforce dot notation whenever possible
    "dot-notation": [2, {
        "allowKeywords": true,
        "allowPattern": ""
    }],
    // require the use of `===` and `!==`
    "eqeqeq": [2],
    // require `for-in` loops to include an `if` statement
    "guard-for-in": [2],
    // disallow the use of `alert`, `confirm`, and `prompt`
    "no-alert": [1],
    // disallow the use of `arguments.caller` or `arguments.callee`
    "no-caller": [2],
    // disallow lexical declarations in case clauses
    "no-case-declarations": [2],
    // disallow division operators explicitly at the beginning of regular expressions
    "no-div-regex": [2],
    // disallow `else` blocks after `return` statements in `if` statements
    "no-else-return": [2],
    // disallow empty functions
    "no-empty-function": [2],
    // disallow empty destructuring patterns
    "no-empty-pattern": [2],
    // disallow `null` comparisons without type-checking operators
    "no-eq-null": [2],
    // disallow the use of `eval()`
    "no-eval": [2],
    // disallow extending native types
    "no-extend-native": [2, {
        "exceptions": ["Object", "Function", "Array"]
    }],
    // disallow unnecessary calls to `.bind()`
    "no-extra-bind": [2],
    // disallow unnecessary labels
    "no-extra-label": [2],
    // disallow fallthrough of `case` statements
    "no-fallthrough": [2],
    // disallow leading or trailing decimal points in numeric literals
    "no-floating-decimal": [2],
    // disallow shorthand type conversions
    "no-implicit-coercion": [2],
    // disallow `var` and named `function` declarations in the global scope
    "no-implicit-globals": [2],
    // disallow the use of `eval()`-like methods
    "no-implied-eval": [2],
    // disallow `this` keywords outside of classes or class-like objects
    "no-invalid-this": [2],
    // disallow the use of the `__iterator__` property
    "no-iterator": [2],
    // disallow labeled statements
    "no-labels": [2],
    // disallow unnecessary nested blocks
    "no-lone-blocks": [2],
    // disallow `function` declarations and expressions inside loop statements
    "no-loop-func": [2],
    // disallow magic numbers
    "no-magic-numbers": [2],
    // disallow multiple spaces
    "no-multi-spaces": [2],
    // disallow multiline strings
    "no-multi-str": [2],
    // disallow reassigning native objects
    "no-native-reassign": [2],
    // disallow `new` operators outside of assignments or comparisons
    "no-new": [1],
    // disallow `new` operators with the `Function` object
    "no-new-func": [2],
    // disallow `new` operators with the `String`, `Number`, and `Boolean` objects
    "no-new-wrappers": [2],
    // disallow octal literals
    "no-octal": [2],
    // disallow octal escape sequences in string literals
    "no-octal-escape": [2],
    // disallow reassigning `function` parameters
    "no-param-reassign": [2, {
        "props": false
    }],
    // disallow the use of the `__proto__` property
    "no-proto": [2],
    // disallow `var` redeclaration
    "no-redeclare": [2, {
        "builtinGlobals": true
    }],
    // disallow assignment operators in `return` statements
    "no-return-assign": [2],
    // disallow `javascript:` urls
    "no-script-url": [2],
    // disallow assignments where both sides are exactly the same
    "no-self-assign": [2],
    // disallow comparisons where both sides are exactly the same
    "no-self-compare": [2],
    // disallow comma operators
    "no-sequences": [2],
    // disallow throwing literals as exceptions
    "no-throw-literal": [2],
    // disallow unmodified loop conditions
    "no-unmodified-loop-condition": [2],
    // disallow unused expressions
    "no-unused-expressions": [2, {
        "allowShortCircuit": false,
        "allowTernary": false
    }],
    // disallow unused labels
    "no-unused-labels": [2],
    // disallow unnecessary calls to `.call()` and `.apply()`
    "no-useless-call": [2],
    // disallow unnecessary concatenation of literals or template literals
    "no-useless-concat": [2],
    // disallow unnecessary escape characters
    "no-useless-escape": [2],
    // disallow `void` operators
    "no-void": [2],
    // disallow specified warning terms in comments
    "no-warning-comments": [1, {
        "terms": ["todo", "fixme", "xxx"],
        "location": "anywhere"
    }],
    // disallow `with` statements
    "no-with": [2],
    // enforce the consistent use of the radix argument when using `parseInt()`
    "radix": [2],
    // require `var` declarations be placed at the top of their containing scope
    "vars-on-top": [1],
    // require parentheses around immediate `function` invocations
    "wrap-iife": [2, "outside"],
    // require or disallow "Yoda" conditions
    "yoda": [2, "never", {
        "exceptRange": false,
        "onlyEquality": false
    }],

    // Strict Mode: http://eslint.org/docs/rules/#strict-mode
    // ------------------------------------------------------

    // require or disallow strict mode directives
    "strict": [2, "global"],

    // Variables: http://eslint.org/docs/rules/#variables
    // --------------------------------------------------

    // require or disallow initialization in `var` declarations
    "init-declarations": [2, "always"],
    // disallow `catch` clause parameters from shadowing variables in the outer scope
    "no-catch-shadow": [2],
    // disallow deleting variables
    "no-delete-var": [2],
    // disallow labels that share a name with a variable
    "no-label-var": [2],
    // disallow specified global variables
    "no-restricted-globals": [], // any name is valid for me
    // disallow `var` declarations from shadowing variables in the outer scope
    "no-shadow": [2, {
        "builtinGlobals": false,
        "hoist": "functions"
    }],
    // disallow identifiers from shadowing restricted names
    "no-shadow-restricted-names": [2],
    // disallow the use of undeclared variables unless mentioned in `/*global */` comments
    "no-undef": [2, {
        "typeof": true
    }],
    // disallow initializing variables to `undefined`
    "no-undef-init": [0],
    // disallow the use of `undefined` as an identifier
    "no-undefined": [2],
    // disallow unused variables
    "no-unused-vars": [2, {
        "vars": "all",
        "args": "after-used",
        "varsIgnorePattern": "",
        "argsIgnorePattern": ""
    }],
    // disallow the use of variables before they are defined
    "no-use-before-define": [2],

    // Node.js and CommonJS: http://eslint.org/docs/rules/#nodejs-and-commonjs
    // -----------------------------------------------------------------------

    // require `return` statements after callbacks
    "callback-return": [2, ["callback", "cb", "next"]],
    // require `require()` calls to be placed at top-level module scope
    "global-require": [2],
    // require error handling in callbacks
    "handle-callback-err": [2, "^(err|error)$"],
    // disallow `require` calls to be mixed with regular `var` declarations
    "no-mixed-requires": [2, {
        "grouping": true
    }],
    // disallow `new` operators with calls to `require`
    "no-new-require": [2],
    // disallow string concatenation with `__dirname` and `__filename`
    "no-path-concat": [2],
    // disallow the use of `process.env`
    "no-process-env": [2],
    // disallow the use of `process.exit()`
    "no-process-exit": [2],
    // disallow specified modules when loaded by `require`
    "no-restricted-modules": [2, ""],
    // disallow synchronous methods
    "no-sync": [2],

    // Stylistic Issues: http://eslint.org/docs/rules/#stylistic-issues
    // ----------------------------------------------------------------

    // enforce consistent spacing inside array brackets
    "array-bracket-spacing": [2, "never"],
    // enforce consistent spacing inside single-line blocks
    "block-spacing": [2, "always"],
    // enforce consistent brace style for blocks
    "brace-style": [2],
    // enforce camelcase naming convention
    "camelcase": [2, {
        "properties": "always"
    }],
    // enforce consistent spacing before and after commas
    "comma-spacing": [2, {
        "before": false,
        "after": true
    }],
    // enforce consistent comma style
    "comma-style": [2, "last"],
    // enforce consistent spacing inside computed property brackets
    "computed-property-spacing": [2, "never"],
    // enforce consistent naming when capturing the current execution context
    "consistent-this": [2, "self"],
    // enforce at least one newline at the end of files
    "eol-last": [2],
    // require or disallow named `function` expressions
    "func-names": [0],
    // enforce the consistent use of either `function` declarations or expressions
    "func-style": [2, "declaration"],
    // disallow specified identifiers
    "id-blacklist": [
        'e' // I didn't know, that it is error or event.
    ],
    // enforce minimum and maximum identifier lengths
    "id-length": [2, {
        "min": 1,
        "max": 100,
        "properties": "always",
        "exceptions": ["x"]
    }],
    // require identifiers to match a specified regular expression
    "id-match": [2, "", {
        "properties": false
    }],
    // enforce consistent indentation
    "indent": [2, 4, {
        "SwitchCase": 1
    }],
    // enforce the consistent use of either double or single quotes in JSX attributes
    "jsx-quotes": [2, "prefer-double"],
    // enforce consistent spacing between keys and values in object literal properties
    "key-spacing": [2, {
        "beforeColon": false,
        "afterColon": true
    }],
    // enforce consistent spacing before and after keywords
    "keyword-spacing": [2, {
        "before": true,
        "after": true
    }],
    // enforce consistent linebreak style
    "linebreak-style": [2, "unix"],
    // require empty lines around comments
    "lines-around-comment": [2, {
        "beforeBlockComment": true,
        "beforeLineComment": true
    }],
    // enforce a maximum depth that blocks can be nested
    "max-depth": [2, 10],
    // enforce a maximum line length
    "max-len": [2, 120, 4, {
        "ignoreComments": true,
        "ignoreUrls": true,
        "ignorePattern": ""
    }],
    // enforce a maximum file length
    "max-lines": [2, {
        "max": 1000,
        "skipBlankLines": true,
        "skipComments": true
    }],
    // enforce a maximum depth that callbacks can be nested
    "max-nested-callbacks": [2, 5],
    // enforce a maximum number of parameters in `function` definitions
    "max-params": [2, 10],
    // enforce a maximum number of statements allowed in `function` blocks
    "max-statements": [2, 15],
    // enforce a maximum number of statements allowed per line
    "max-statements-per-line": [2, {
        "max": 1
    }],
    // require constructor `function` names to begin with a capital letter
    "new-cap": [2, {
        "newIsCap": true,
        "capIsNew": true,
        "newIsCapExceptions": [],
        "capIsNewExceptions": [],
        "properties": true
    }],
    // require parentheses when invoking a constructor with no arguments
    "new-parens": [2],
    // require or disallow an empty line after `var` declarations
    "newline-after-var": [2, "always"],
    // require an empty line before `return` statements
    "newline-before-return": [2],
    // require a newline after each call in a method chain
    "newline-per-chained-call": [2, {
        "ignoreChainWithDepth": 2
    }],
    // disallow `Array` constructors
    "no-array-constructor": [2],
    // disallow bitwise operators
    "no-bitwise": [2],
    // disallow `continue` statements
    "no-continue": [1],
    // disallow inline comments after code
    "no-inline-comments": [2],
    // disallow `if` statements as the only statement in `else` blocks
    "no-lonely-if": [2],
    // disallow mixes of different operators
    "no-mixed-operators": [2],
    // disallow mixed spaces and tabs for indentation
    "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
    // disallow multiple empty lines
    "no-multiple-empty-lines": [2, {
        "max": 2
    }],
    // disallow negated conditions
    "no-negated-condition": [2],
    // disallow nested ternary expressions
    "no-nested-ternary": [2],
    // disallow `Object` constructors
    "no-new-object": [2],
    // disallow the unary operators `++` and `--`
    "no-plusplus": [0],
    // disallow specified syntax
    "no-restricted-syntax": [2, "WithStatement"],
    // disallow spacing between `function` identifiers and their applications
    "no-spaced-func": [2],
    // disallow ternary operators
    "no-ternary": [1],
    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces": [2, {
        "skipBlankLines": true
    }],
    // disallow dangling underscores in identifiers
    "no-underscore-dangle": [0],
    // disallow ternary operators when simpler alternatives exist
    "no-unneeded-ternary": [2, {
        "defaultAssignment": true
    }],
    // disallow whitespace before properties
    "no-whitespace-before-property": [2],
    // enforce consistent line breaks inside braces
    "object-curly-newline": [2, {
        "multiline": true,
        "minProperties": 2
    }],
    // enforce consistent spacing inside braces
    "object-curly-spacing": [2, "always", {
        "objectsInObjects": false,
        "arraysInObjects": false
    }],
    // enforce placing object properties on separate lines
    "object-property-newline": [2, {
        "allowMultiplePropertiesPerLine": false
    }],
    // enforce variables to be declared either together or separately in functions
    "one-var": [2, {
        "uninitialized": "always",
        "initialized": "never"
    }],
    // require or disallow newlines around `var` declarations
    "one-var-declaration-per-line": [2, "initializations"],
    // require or disallow assignment operator shorthand where possible
    "operator-assignment": [2, "always"],
    // enforce consistent linebreak style for operators
    "operator-linebreak": [2, "before"],
    // require or disallow padding within blocks
    "padded-blocks": [2, "never"],
    // require quotes around object literal property names
    "quote-props": [2, "as-needed"],
    // enforce the consistent use of either backticks, double, or single quotes
    "quotes": [2, "single"],
    // require JSDoc comments
    "require-jsdoc": [2],
    // require or disallow semicolons instead of ASI
    "semi": [2, "always"],
    // enforce consistent spacing before and after semicolons
    "semi-spacing": [2, {
        "before": false,
        "after": true
    }],
    // require variables within the same declaration block to be sorted
    "sort-vars": [2, {
        "ignoreCase": true
    }],
    // enforce consistent spacing before blocks
    "space-before-blocks": [2, "always"],
    // enforce consistent spacing before function definition opening parenthesis
    "space-before-function-paren": [2, {
        "anonymous": "always",
        "named": "never"
    }],
    // enforce consistent spacing inside parentheses
    "space-in-parens": [2, "never"],
    // require spacing around operators
    "space-infix-ops": [2, {
        "int32Hint": false
    }],
    // enforce consistent spacing before or after unary operators
    "space-unary-ops": [1, {
        "words": true,
        "nonwords": false
    }],
    // enforce consistent spacing after the `//` or `/*` in a comment
    "spaced-comment": [2, "always"],
    // require or disallow the Unicode BOM
    "unicode-bom": [2, "never"],
    // require parenthesis around regex literals
    "wrap-regex": [2],

    // ECMAScript 6: http://eslint.org/docs/rules/#ecmascript-6
    // --------------------------------------------------------

    // require braces around arrow function bodies
    "arrow-body-style": [2, "as-needed"],
    // require parentheses around arrow function arguments
    "arrow-parens": [2, "always"],
    // enforce consistent spacing before and after the arrow in arrow functions
    "arrow-spacing": [2, {
        "before": true,
        "after": true
    }],
    // require `super()` calls in constructors
    "constructor-super": [2],
    // enforce consistent spacing around `*` operators in generator functions
    "generator-star-spacing": [2, {
        "before": true,
        "after": true
    }],
    // disallow reassigning class members
    "no-class-assign": [2],
    // disallow arrow functions where they could be confused with comparisons
    "no-confusing-arrow": [2, {
        "allowParens": false
    }],
    // disallow reassigning `const` variables
    "no-const-assign": [2],
    // disallow duplicate class members
    "no-dupe-class-members": [2],
    // disallow duplicate module imports
    "no-duplicate-imports": [2, {
        "includeExports": false
    }],
    // disallow `new` operators with the `Symbol` object
    "no-new-symbol": [2],
    // disallow specified modules when loaded by `import`
    "no-restricted-imports": [0], // I didn't get it, why I would disallow any modules
    // disallow `this` / `super` before calling `super()` in constructors
    "no-this-before-super": [2],
    // disallow unnecessary computed property keys in object literals
    "no-useless-computed-key": [2],
    // disallow unnecessary constructors
    "no-useless-constructor": [1],
    // disallow renaming import, export, and destructured assignments to the same name
    "no-useless-rename": [2],
    // require `let` or `const` instead of `var`
    "no-var": [2],
    // require or disallow method and property shorthand syntax for object literals
    "object-shorthand": [2, "always"],
    // require arrow functions as callbacks
    "prefer-arrow-callback": [2],
    // require `const` declarations for variables that are never reassigned after declared
    "prefer-const": [0],
    // require `Reflect` methods where applicable
    "prefer-reflect": [0],
    // require rest parameters instead of `arguments`
    "prefer-rest-params": [0],
    // require spread operators instead of `.apply()`
    "prefer-spread": [2],
    // require template literals instead of string concatenation
    "prefer-template": [2],
    // require generator functions to contain `yield`
    "require-yield": [2],
    // enforce spacing between rest and spread operators and their expressions
    "rest-spread-spacing": [2],
    // enforce sorted import declarations within modules
    "sort-imports": [1, {
        "ignoreCase": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
    }],
    // require or disallow spacing around embedded expressions of template strings
    "template-curly-spacing": [2],
    // require or disallow spacing around the `*` in `yield*` expressions
    "yield-star-spacing": [2, {
        "before": true,
        "after": true
    }]
};
