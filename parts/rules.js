'use strict';

// http://eslint.org/docs/rules/

module.exports = {
    // Possible Errors: http://eslint.org/docs/rules/#possible-errors
    // --------------------------------------------------------------

    // require or disallow trailing commas
    "comma-dangle": ["error", "never"],
    // disallow assignment operators in conditional expressions
    "no-cond-assign": ["error", "always"],
    // disallow the use of `console`
    "no-console": ["warn"],
    // disallow constant expressions in conditions
    "no-constant-condition": ["error"],
    // disallow control characters in regular expressions
    "no-control-regex": ["error"],
    // disallow the use of `debugger`
    "no-debugger": ["error"],
    // disallow duplicate arguments in `function` definitions
    "no-dupe-args": ["error"],
    // disallow duplicate keys in object literals
    "no-dupe-keys": ["error"],
    // disallow duplicate case labels
    "no-duplicate-case": ["error"],
    // disallow empty block statements
    "no-empty": ["error"],
    // disallow empty character classes in regular expressions
    "no-empty-character-class": ["error"],
    // disallow reassigning exceptions in `catch` clauses
    "no-ex-assign": ["error"],
    // disallow unnecessary boolean casts
    "no-extra-boolean-cast": ["error"],
    // disallow unnecessary parentheses
    "no-extra-parens": ["error", "functions"],
    // disallow unnecessary semicolons
    "no-extra-semi": ["error"],
    // disallow reassigning `function` declarations
    "no-func-assign": ["error"],
    // disallow `function` or `var` declarations in nested blocks
    "no-inner-declarations": ["error"],
    // disallow invalid regular expression strings in `RegExp` constructors
    "no-invalid-regexp": ["error"],
    // disallow irregular whitespace outside of strings and comments
    "no-irregular-whitespace": ["error"],
    // disallow negating the left operand in `in` expressions
    "no-negated-in-lhs": ["error"],
    // disallow calling global object properties as functions
    "no-obj-calls": ["error"],
    // Disallow use of `Object.prototypes` builtins directly
    "no-prototype-builtins": ["error"],
    // disallow multiple spaces in regular expression literals
    "no-regex-spaces": ["error"],
    // disallow sparse arrays
    "no-sparse-arrays": ["error"],
    // disallow confusing multiline expressions
    "no-unexpected-multiline": ["error"],
    // disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
    "no-unreachable": ["error"],
    // disallow control flow statements in `finally` blocks
    "no-unsafe-finally": ["error"],
    // require calls to `isNaN()` when checking for `NaN`
    "use-isnan": ["error"],
    // enforce valid JSDoc comments
    "valid-jsdoc": ["error", {
        "prefer": {},
        "preferType": {
            "String": "string",
            "Boolean": "boolean",
            "Number": "number",
            "object": "Object",
            "array": "Array",
            "function": "Function"
        },
        "requireReturn": false,
        "requireReturnType": true,
        "matchDescription": '',
        "requireParamDescription": false,
        "requireReturnDescription": false
    }],
    // enforce comparing typeof expressions against valid strings
    "valid-typeof": ["error"],

    // Best Practices: http://eslint.org/docs/rules/#best-practices
    // ------------------------------------------------------------

    // enforce getter and setter pairs in objects
    "accessor-pairs": ["error", {
        "getWithoutSet": true
    }],
    // enforce `return` statements in callbacks of array methods
    "array-callback-return": ["error"],
    // enforce the use of variables within the scope they are defined
    "block-scoped-var": ["error"],
    // enforce a maximum cyclomatic complexity allowed in a program
    "complexity": ["error", 10],
    // require `return` statements to either always or never specify values
    "consistent-return": ["off"],
    // enforce consistent brace style for all control statements
    "curly": ["error"],
    // require `default` cases in `switch` statements
    "default-case": ["warn"],
    // enforce consistent newlines before and after dots
    "dot-location": ["error", "property"],
    // enforce dot notation whenever possible
    "dot-notation": ["error", {
        "allowKeywords": true,
        "allowPattern": ""
    }],
    // require the use of `===` and `!==`
    "eqeqeq": ["error"],
    // require `for-in` loops to include an `if` statement
    "guard-for-in": ["error"],
    // disallow the use of `alert`, `confirm`, and `prompt`
    "no-alert": ["warn"],
    // disallow the use of `arguments.caller` or `arguments.callee`
    "no-caller": ["error"],
    // disallow lexical declarations in case clauses
    "no-case-declarations": ["error"],
    // disallow division operators explicitly at the beginning of regular expressions
    "no-div-regex": ["error"],
    // disallow `else` blocks after `return` statements in `if` statements
    "no-else-return": ["error"],
    // disallow empty functions
    "no-empty-function": ["error"],
    // disallow empty destructuring patterns
    "no-empty-pattern": ["error"],
    // disallow `null` comparisons without type-checking operators
    "no-eq-null": ["error"],
    // disallow the use of `eval()`
    "no-eval": ["error"],
    // disallow extending native types
    "no-extend-native": ["error", {
        "exceptions": ["Object", "Function", "Array"]
    }],
    // disallow unnecessary calls to `.bind()`
    "no-extra-bind": ["error"],
    // disallow unnecessary labels
    "no-extra-label": ["error"],
    // disallow fallthrough of `case` statements
    "no-fallthrough": ["error"],
    // disallow leading or trailing decimal points in numeric literals
    "no-floating-decimal": ["error"],
    // disallow shorthand type conversions
    "no-implicit-coercion": ["error"],
    // disallow `var` and named `function` declarations in the global scope
    "no-implicit-globals": ["error"],
    // disallow the use of `eval()`-like methods
    "no-implied-eval": ["error"],
    // disallow `this` keywords outside of classes or class-like objects
    "no-invalid-this": ["error"],
    // disallow the use of the `__iterator__` property
    "no-iterator": ["error"],
    // disallow labeled statements
    "no-labels": ["error"],
    // disallow unnecessary nested blocks
    "no-lone-blocks": ["error"],
    // disallow `function` declarations and expressions inside loop statements
    "no-loop-func": ["error"],
    // disallow magic numbers
    "no-magic-numbers": ["warn"],
    // disallow multiple spaces
    "no-multi-spaces": ["error"],
    // disallow multiline strings
    "no-multi-str": ["error"],
    // disallow reassigning native objects
    "no-native-reassign": ["error"],
    // disallow `new` operators outside of assignments or comparisons
    "no-new": ["warn"],
    // disallow `new` operators with the `Function` object
    "no-new-func": ["error"],
    // disallow `new` operators with the `String`, `Number`, and `Boolean` objects
    "no-new-wrappers": ["error"],
    // disallow octal literals
    "no-octal": ["error"],
    // disallow octal escape sequences in string literals
    "no-octal-escape": ["error"],
    // disallow reassigning `function` parameters
    "no-param-reassign": ["error", {
        "props": false
    }],
    // disallow the use of the `__proto__` property
    "no-proto": ["error"],
    // disallow `var` redeclaration
    "no-redeclare": ["error", {
        "builtinGlobals": true
    }],
    // disallow assignment operators in `return` statements
    "no-return-assign": ["error"],
    // disallow `javascript:` urls
    "no-script-url": ["error"],
    // disallow assignments where both sides are exactly the same
    "no-self-assign": ["error"],
    // disallow comparisons where both sides are exactly the same
    "no-self-compare": ["error"],
    // disallow comma operators
    "no-sequences": ["error"],
    // disallow throwing literals as exceptions
    "no-throw-literal": ["error"],
    // disallow unmodified loop conditions
    "no-unmodified-loop-condition": ["error"],
    // disallow unused expressions
    "no-unused-expressions": ["error", {
        "allowShortCircuit": false,
        "allowTernary": false
    }],
    // disallow unused labels
    "no-unused-labels": ["error"],
    // disallow unnecessary calls to `.call()` and `.apply()`
    "no-useless-call": ["error"],
    // disallow unnecessary concatenation of literals or template literals
    "no-useless-concat": ["error"],
    // disallow unnecessary escape characters
    "no-useless-escape": ["error"],
    // disallow `void` operators
    "no-void": ["off"],
    // disallow specified warning terms in comments
    "no-warning-comments": ["warn", {
        "terms": ["todo", "fixme", "xxx"],
        "location": "anywhere"
    }],
    // disallow `with` statements
    "no-with": ["error"],
    // enforce the consistent use of the radix argument when using `parseInt()`
    "radix": ["error"],
    // require `var` declarations be placed at the top of their containing scope
    "vars-on-top": ["warn"],
    // require parentheses around immediate `function` invocations
    "wrap-iife": ["error", "outside"],
    // require or disallow "Yoda" conditions
    "yoda": ["error", "never", {
        "exceptRange": false,
        "onlyEquality": false
    }],

    // Strict Mode: http://eslint.org/docs/rules/#strict-mode
    // ------------------------------------------------------

    // require or disallow strict mode directives
    "strict": ["off"],

    // Variables: http://eslint.org/docs/rules/#variables
    // --------------------------------------------------

    // require or disallow initialization in `var` declarations
    "init-declarations": ["warn"],
    // disallow `catch` clause parameters from shadowing variables in the outer scope
    "no-catch-shadow": ["error"],
    // disallow deleting variables
    "no-delete-var": ["error"],
    // disallow labels that share a name with a variable
    "no-label-var": ["error"],
    // disallow specified global variables
    "no-restricted-globals": ["error"], // any name is valid for me
    // disallow `var` declarations from shadowing variables in the outer scope
    "no-shadow": ["error", {
        "builtinGlobals": false,
        "hoist": "functions",
        "allow": []
    }],
    // disallow identifiers from shadowing restricted names
    "no-shadow-restricted-names": ["error"],
    // disallow the use of undeclared variables unless mentioned in `/*global */` comments
    "no-undef": ["error", {
        "typeof": true
    }],
    // disallow initializing variables to `undefined`
    "no-undef-init": ["off"],
    // disallow the use of `undefined` as an identifier
    "no-undefined": ["error"],
    // disallow unused variables
    "no-unused-vars": ["error", {
        "vars": "all",
        "args": "after-used",
        "varsIgnorePattern": "",
        "argsIgnorePattern": ""
    }],
    // disallow the use of variables before they are defined
    "no-use-before-define": ["error"],

    // Node.js and CommonJS: http://eslint.org/docs/rules/#nodejs-and-commonjs
    // -----------------------------------------------------------------------

    // require `return` statements after callbacks
    "callback-return": ["off"],
    // require `require()` calls to be placed at top-level module scope
    "global-require": ["warn"],
    // require error handling in callbacks
    "handle-callback-err": ["error", "^(err|error)$"],
    // disallow `require` calls to be mixed with regular `var` declarations
    "no-mixed-requires": ["error", {
        "grouping": true
    }],
    // disallow `new` operators with calls to `require`
    "no-new-require": ["error"],
    // disallow string concatenation with `__dirname` and `__filename`
    "no-path-concat": ["error"],
    // disallow the use of `process.env`
    "no-process-env": ["error"],
    // disallow the use of `process.exit()`
    "no-process-exit": ["error"],
    // disallow specified modules when loaded by `require`
    "no-restricted-modules": ["error", ""],
    // disallow synchronous methods
    "no-sync": ["error"],

    // Stylistic Issues: http://eslint.org/docs/rules/#stylistic-issues
    // ----------------------------------------------------------------

    // enforce consistent spacing inside array brackets
    "array-bracket-spacing": ["error", "never"],
    // enforce consistent spacing inside single-line blocks
    "block-spacing": ["error", "always"],
    // enforce consistent brace style for blocks
    "brace-style": ["error"],
    // enforce camelcase naming convention
    "camelcase": ["error", {
        "properties": "always"
    }],
    // enforce consistent spacing before and after commas
    "comma-spacing": ["error", {
        "before": false,
        "after": true
    }],
    // enforce consistent comma style
    "comma-style": ["error", "last"],
    // enforce consistent spacing inside computed property brackets
    "computed-property-spacing": ["error", "never"],
    // enforce consistent naming when capturing the current execution context
    "consistent-this": ["error", "self"],
    // enforce at least one newline at the end of files
    "eol-last": ["error"],
    // require or disallow named `function` expressions
    "func-names": ["off"],
    // enforce the consistent use of either `function` declarations or expressions
    "func-style": ["error", "declaration"],
    // disallow specified identifiers
    "id-blacklist": ["error",
        'e' // I didn't know, that it is error or event.
    ],
    // enforce minimum and maximum identifier lengths
    "id-length": ["error", {
        "min": 1,
        "max": 100,
        "properties": "always",
        "exceptions": ["x"]
    }],
    // require identifiers to match a specified regular expression
    "id-match": ["error", "", {
        "properties": false
    }],
    // enforce consistent indentation
    "indent": ["error", 4, {
        "SwitchCase": 1
    }],
    // enforce the consistent use of either double or single quotes in JSX attributes
    "jsx-quotes": ["error", "prefer-double"],
    // enforce consistent spacing between keys and values in object literal properties
    "key-spacing": ["error", {
        "beforeColon": false,
        "afterColon": true
    }],
    // enforce consistent spacing before and after keywords
    "keyword-spacing": ["error", {
        "before": true,
        "after": true
    }],
    // enforce consistent linebreak style
    "linebreak-style": ["off"],
    // require empty lines around comments
    "lines-around-comment": ["error", {
        "beforeBlockComment": true
    }],
    // enforce a maximum depth that blocks can be nested
    "max-depth": ["error", 10],
    // enforce a maximum line length
    "max-len": ["error", {
        "code": 80,
        "tabWidth": 4,
        "comments": 80,
        "ignorePattern": "",
        "ignoreComments": true,
        "ignoreTrailingComments": true,
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
    }],
    // enforce a maximum file length
    "max-lines": ["error", {
        "max": 1000,
        "skipBlankLines": true,
        "skipComments": true
    }],
    // enforce a maximum depth that callbacks can be nested
    "max-nested-callbacks": ["error", 5],
    // enforce a maximum number of parameters in `function` definitions
    "max-params": ["error", 10],
    // enforce a maximum number of statements allowed in `function` blocks
    "max-statements": ["error", 15],
    // enforce a maximum number of statements allowed per line
    "max-statements-per-line": ["error", {
        "max": 1
    }],
    // require constructor `function` names to begin with a capital letter
    "new-cap": ["error", {
        "newIsCap": true,
        "capIsNew": true,
        "newIsCapExceptions": [],
        "capIsNewExceptions": [],
        "properties": true
    }],
    // require parentheses when invoking a constructor with no arguments
    "new-parens": ["error"],
    // require or disallow an empty line after `var` declarations
    "newline-after-var": ["off"],
    // require an empty line before `return` statements
    "newline-before-return": ["off"],
    // require a newline after each call in a method chain
    "newline-per-chained-call": ["error", {
        "ignoreChainWithDepth": 2
    }],
    // disallow `Array` constructors
    "no-array-constructor": ["error"],
    // disallow bitwise operators
    "no-bitwise": ["error"],
    // disallow `continue` statements
    "no-continue": ["warn"],
    // disallow inline comments after code
    "no-inline-comments": ["error"],
    // disallow `if` statements as the only statement in `else` blocks
    "no-lonely-if": ["error"],
    // disallow mixes of different operators
    "no-mixed-operators": ["error"],
    // disallow mixed spaces and tabs for indentation
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    // disallow multiple empty lines
    "no-multiple-empty-lines": ["error", {
        "max": 2
    }],
    // disallow negated conditions
    "no-negated-condition": ["error"],
    // disallow nested ternary expressions
    "no-nested-ternary": ["error"],
    // disallow `Object` constructors
    "no-new-object": ["error"],
    // disallow the unary operators `++` and `--`
    "no-plusplus": ["off"],
    // disallow specified syntax
    "no-restricted-syntax": ["error", "WithStatement"],
    // disallow spacing between `function` identifiers and their applications
    "no-spaced-func": ["error"],
    // disallow ternary operators
    "no-ternary": ["off"],
    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces": ["error", {
        "skipBlankLines": true
    }],
    // disallow dangling underscores in identifiers
    "no-underscore-dangle": ["off"],
    // disallow ternary operators when simpler alternatives exist
    "no-unneeded-ternary": ["error", {
        "defaultAssignment": true
    }],
    // disallow whitespace before properties
    "no-whitespace-before-property": ["error"],
    // enforce consistent line breaks inside braces
    "object-curly-newline": ["error", {
        "multiline": true,
        "minProperties": 2
    }],
    // enforce consistent spacing inside braces
    "object-curly-spacing": ["error", "always", {
        "objectsInObjects": false,
        "arraysInObjects": false
    }],
    // enforce placing object properties on separate lines
    "object-property-newline": ["error", {
        "allowMultiplePropertiesPerLine": false
    }],
    // enforce variables to be declared either together or separately in functions
    "one-var": ["error", {
        "uninitialized": "always",
        "initialized": "never"
    }],
    // require or disallow newlines around `var` declarations
    "one-var-declaration-per-line": ["error", "initializations"],
    // require or disallow assignment operator shorthand where possible
    "operator-assignment": ["error", "always"],
    // enforce consistent linebreak style for operators
    "operator-linebreak": ["error", "before"],
    // require or disallow padding within blocks
    "padded-blocks": ["off"],
    // require quotes around object literal property names
    "quote-props": ["error", "as-needed"],
    // enforce the consistent use of either backticks, double, or single quotes
    "quotes": ["error", "single"],
    // require JSDoc comments
    "require-jsdoc": ["warn"],
    // require or disallow semicolons instead of ASI
    "semi": ["error", "always"],
    // enforce consistent spacing before and after semicolons
    "semi-spacing": ["error", {
        "before": false,
        "after": true
    }],
    // require variables within the same declaration block to be sorted
    "sort-vars": ["off"],
    // enforce consistent spacing before blocks
    "space-before-blocks": ["error", "always"],
    // enforce consistent spacing before function definition opening parenthesis
    "space-before-function-paren": ["error", {
        "anonymous": "always",
        "named": "never"
    }],
    // enforce consistent spacing inside parentheses
    "space-in-parens": ["error", "never"],
    // require spacing around operators
    "space-infix-ops": ["error", {
        "int32Hint": false
    }],
    // enforce consistent spacing before or after unary operators
    "space-unary-ops": ["warn", {
        "words": true,
        "nonwords": false
    }],
    // enforce consistent spacing after the `//` or `/*` in a comment
    "spaced-comment": ["error", "always"],
    // require or disallow the Unicode BOM
    "unicode-bom": ["error", "never"],
    // require parenthesis around regex literals
    "wrap-regex": ["error"],

    // ECMAScript 6: http://eslint.org/docs/rules/#ecmascript-6
    // --------------------------------------------------------

    // require braces around arrow function bodies
    "arrow-body-style": ["error", "as-needed"],
    // require parentheses around arrow function arguments
    "arrow-parens": ["error", "always"],
    // enforce consistent spacing before and after the arrow in arrow functions
    "arrow-spacing": ["error", {
        "before": true,
        "after": true
    }],
    // require `super()` calls in constructors
    "constructor-super": ["error"],
    // enforce consistent spacing around `*` operators in generator functions
    "generator-star-spacing": ["error", {
        "before": true,
        "after": true
    }],
    // disallow reassigning class members
    "no-class-assign": ["error"],
    // disallow arrow functions where they could be confused with comparisons
    "no-confusing-arrow": ["error", {
        "allowParens": false
    }],
    // disallow reassigning `const` variables
    "no-const-assign": ["error"],
    // disallow duplicate class members
    "no-dupe-class-members": ["error"],
    // disallow duplicate module imports
    "no-duplicate-imports": ["error", {
        "includeExports": false
    }],
    // disallow `new` operators with the `Symbol` object
    "no-new-symbol": ["error"],
    // disallow specified modules when loaded by `import`
    "no-restricted-imports": ["off"], // I didn't get it, why I would disallow any modules
    // disallow `this` / `super` before calling `super()` in constructors
    "no-this-before-super": ["error"],
    // disallow unnecessary computed property keys in object literals
    "no-useless-computed-key": ["error"],
    // disallow unnecessary constructors
    "no-useless-constructor": ["warn"],
    // disallow renaming import, export, and destructured assignments to the same name
    "no-useless-rename": ["error"],
    // require `let` or `const` instead of `var`
    "no-var": ["error"],
    // require or disallow method and property shorthand syntax for object literals
    "object-shorthand": ["error", "always"],
    // require arrow functions as callbacks
    "prefer-arrow-callback": ["error"],
    // require `const` declarations for variables that are never reassigned after declared
    "prefer-const": ["off"],
    // require `Reflect` methods where applicable
    "prefer-reflect": ["off"],
    // require rest parameters instead of `arguments`
    "prefer-rest-params": ["off"],
    // require spread operators instead of `.apply()`
    "prefer-spread": ["error"],
    // require template literals instead of string concatenation
    "prefer-template": ["error"],
    // require generator functions to contain `yield`
    "require-yield": ["error"],
    // enforce spacing between rest and spread operators and their expressions
    "rest-spread-spacing": ["error"],
    // enforce sorted import declarations within modules
    "sort-imports": ["warn", {
        "ignoreCase": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
    }],
    // require or disallow spacing around embedded expressions of template strings
    "template-curly-spacing": ["error"],
    // require or disallow spacing around the `*` in `yield*` expressions
    "yield-star-spacing": ["error", {
        "before": true,
        "after": true
    }]
};
