module.exports = {
    // Tip 1: To use Babel.js as ESLint parser:
    // `npm install babel-eslint`
    // In next step uncomment that line:
    // "parser": "babel-eslint",

    // Rules: http://eslint.org/docs/rules/
    // ------------------------------------

    "rules": {
        // Possible Errors: http://eslint.org/docs/rules/#possible-errors
        // --------------------------------------------------------------

        // disallow or enforce trailing commas (recommended)
        "comma-dangle": [2, "never"],
        // disallow assignment in conditional expressions (recommended)
        "no-cond-assign": [2, "always"],
        // disallow use of console in the node environment (recommended)
        "no-console": [1],
        // disallow use of constant expressions in conditions (recommended)
        "no-constant-condition": [2],
        // disallow control characters in regular expressions (recommended)
        "no-control-regex": [2],
        // disallow use of debugger (recommended)
        "no-debugger": [2],
        // disallow duplicate arguments in functions (recommended)
        "no-dupe-args": [2],
        // disallow duplicate keys when creating object literals (recommended)
        "no-dupe-keys": [2],
        // disallow a duplicate case label. (recommended)
        "no-duplicate-case": [2],
        // disallow the use of empty character classes in regular expressions (recommended)
        "no-empty-character-class": [2],
        // disallow empty statements (recommended)
        "no-empty": [2],
        // disallow assigning to the exception in a catch block (recommended)
        "no-ex-assign": [2],
        // disallow double-negation boolean casts in a boolean context (recommended)
        "no-extra-boolean-cast": [2],
        // disallow unnecessary parentheses
        "no-extra-parens": [2, "functions"],
        // disallow unnecessary semicolons (recommended) (fixable)
        "no-extra-semi": [2],
        // disallow overwriting functions written as function declarations (recommended)
        "no-func-assign": [2],
        // disallow function or variable declarations in nested blocks (recommended)
        "no-inner-declarations": [2],
        // disallow invalid regular expression strings in the RegExp constructor (recommended)
        "no-invalid-regexp": [2],
        // disallow irregular whitespace outside of strings and comments (recommended)
        "no-irregular-whitespace": [2],
        // disallow negation of the left operand of an in expression (recommended)
        "no-negated-in-lhs": [2],
        // disallow the use of object properties of the global object (Math and JSON) as functions (recommended)
        "no-obj-calls": [2],
        // disallow multiple spaces in a regular expression literal (recommended)
        "no-regex-spaces": [2],
        // disallow sparse arrays (recommended)
        "no-sparse-arrays": [2],
        // disallow unreachable statements after a return, throw, continue, or break statement (recommended)
        "no-unreachable": [2],
        // disallow comparisons with the value NaN (recommended)
        "use-isnan": [2],
        // Ensure JSDoc comments are valid
        "valid-jsdoc": [2, {
            "prefer": {},
            "requireParamDescription": true,
            "requireReturn": false,
            "requireReturnDescription": false
        }],
        // Ensure that the results of typeof are compared against a valid string (recommended)
        "valid-typeof": [2],
        // Avoid code that looks like two expressions but is actually one
        "no-unexpected-multiline": [2],

        // Best Practices: http://eslint.org/docs/rules/#best-practices
        // ------------------------------------------------------------

        // Enforces getter/setter pairs in objects
        "accessor-pairs": [2, {
            "getWithoutSet": true
        }],
        // treat var statements as if they were block scoped
        "block-scoped-var": [2],
        // specify the maximum cyclomatic complexity allowed in a program
        "complexity": [2, 10],
        // require return statements to either always or never specify values
        "consistent-return": [2],
        // specify curly brace conventions for all control statements
        "curly": [2],
        // require default case in switch statements
        "default-case": [2],
        // encourages use of dot notation whenever possible
        "dot-notation": [2, {
            "allowKeywords": true,
            "allowPattern": ""
        }],
        // enforces consistent newlines before or after dots
        "dot-location": [2, "property"],
        // require the use of === and !== (fixable)
        "eqeqeq": [2],
        // make sure for-in loops have an if statement
        "guard-for-in": [2],
        // disallow the use of alert, confirm, and prompt
        "no-alert": [1],
        // disallow use of arguments.caller or arguments.callee
        "no-caller": [2],
        // disallow division operators explicitly at beginning of regular expression
        "no-div-regex": [2],
        // disallow else after a return in an if
        "no-else-return": [2],
        // disallow use of labels for anything other than loops and switches
        "no-empty-label": [2],
        // disallow comparisons to null without a type-checking operator
        "no-eq-null": [2],
        // disallow use of eval()
        "no-eval": [2],
        // disallow adding to native types
        "no-extend-native": [2, {
            "exceptions": ["Object", "Function", "Array"]
        }],
        // disallow unnecessary function binding
        "no-extra-bind": [2],
        // disallow fallthrough of case statements (recommended)
        "no-fallthrough": [2],
        // disallow the use of leading or trailing decimal points in numeric literals
        "no-floating-decimal": [2],
        // disallow the type conversions with shorter notations
        "no-implicit-coercion": [2],
        // disallow use of eval()-like methods
        "no-implied-eval": [2],
        // disallow this keywords outside of classes or class-like objects
        "no-invalid-this": [2],
        // disallow usage of __iterator__ property
        "no-iterator": [2],
        // disallow use of labeled statements
        "no-labels": [2],
        // disallow unnecessary nested blocks
        "no-lone-blocks": [2],
        // disallow creation of functions within loops
        "no-loop-func": [2],
        // disallow use of multiple spaces
        "no-multi-spaces": [2],
        // disallow use of multiline strings
        "no-multi-str": [2],
        // disallow reassignments of native objects
        "no-native-reassign": [2],
        // disallow use of new operator for Function object
        "no-new-func": [2],
        // disallows creating new instances of String,Number, and Boolean
        "no-new-wrappers": [2],
        // disallow use of the new operator when not part of an assignment or comparison
        "no-new": [1],
        // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
        "no-octal-escape": [2],
        // disallow use of octal literals (recommended)
        "no-octal": [2],
        // disallow reassignment of function parameters
        "no-param-reassign": [2, {
            "props": false
        }],
        // disallow use of process.env
        "no-process-env": [2],
        // disallow usage of __proto__ property
        "no-proto": [2],
        // disallow declaring the same variable more than once (recommended)
        "no-redeclare": [2, {
            "builtinGlobals": true
        }],
        // disallow use of assignment in return statement
        "no-return-assign": [2],
        // disallow use of javascript: urls.
        "no-script-url": [2],
        // disallow comparisons where both sides are exactly the same
        "no-self-compare": [2],
        // disallow use of the comma operator
        "no-sequences": [2],
        // restrict what can be thrown as an exception
        "no-throw-literal": [2],
        // disallow usage of expressions in statement position
        "no-unused-expressions": [2, {
            "allowShortCircuit": false,
            "allowTernary": false
        }],
        // disallow unnecessary .call() and .apply()
        "no-useless-call": [2],
        // disallow unnecessary concatenation of literals or template literals
        "no-useless-concat": [2],
        // disallow use of the void operator
        "no-void": [2],
        // disallow usage of configurable warning terms in comments - e.g. TODO or FIXME
        "no-warning-comments": [1, {
            "terms": ["todo", "fixme", "xxx"],
            "location": "anywhere"
        }],
        // disallow use of the with statement
        "no-with": [2],
        // require use of the second argument for parseInt()
        "radix": [2],
        // require declaration of all vars at the top of their containing scope
        "vars-on-top": [1],
        // require immediate function invocation to be wrapped in parentheses
        "wrap-iife": [2, "outside"],
        // require or disallow Yoda conditions
        "yoda": [2, "never", {
            "exceptRange": false,
            "onlyEquality": false
        }],

        // Strict Mode: http://eslint.org/docs/rules/#strict-mode
        // ------------------------------------------------------

        // controls location of Use Strict Directives
        "strict": [2, "global"],

        // Variables: http://eslint.org/docs/rules/#variables
        // --------------------------------------------------

        // enforce or disallow variable initializations at definition
        "init-declarations": [2, "always"],
        // disallow the catch clause parameter name being the same as a variable in the outer scope
        "no-catch-shadow": [2],
        // disallow deletion of variables (recommended)
        "no-delete-var": [2],
        // disallow labels that share a name with a variable
        "no-label-var": [2],
        // disallow shadowing of names such as arguments
        "no-shadow-restricted-names": [2],
        // disallow declaration of variables already declared in the outer scope
        "no-shadow": [2, {
            "builtinGlobals": false,
            "hoist": "functions"
        }],
        // disallow use of undefined when initializing variables
        "no-undef-init": [0],
        // disallow use of undeclared variables unless mentioned in a /*global */ block (recommended)
        "no-undef": [2, {
            "typeof": true
        }],
        // disallow use of undefined variable
        "no-undefined": [2],
        // disallow declaration of variables that are not used in the code (recommended)
        "no-unused-vars": [2, {
            "vars": "all",
            "args": "after-used",
            "varsIgnorePattern": "",
            "argsIgnorePattern": ""
        }],
        // disallow use of variables before they are defined
        "no-use-before-define": [2],

        // Node.js and CommonJS: http://eslint.org/docs/rules/#nodejs-and-commonjs
        // -----------------------------------------------------------------------

        // enforce return after a callback
        "callback-return": [2, ["callback", "cb", "next"]],
        // disallow require() outside of the top-level module scope
        "global-require": [2],
        // enforce error handling in callbacks
        "handle-callback-err": [2, "^(err|error)$"],
        // disallow mixing regular variable and require declarations
        "no-mixed-requires": [2, {
            "grouping": true
        }],
        // disallow use of new operator with the require function
        "no-new-require": [2],
        // disallow string concatenation with __dirname and __filename
        "no-path-concat": [2],
        // disallow process.exit()
        "no-process-exit": [2],
        // restrict usage of specified node modules
        "no-restricted-modules": [2, ""],
        // disallow use of synchronous methods
        "no-sync": [2],

        // Stylistic Issues: http://eslint.org/docs/rules/#stylistic-issues
        // ----------------------------------------------------------------

        // enforce spacing inside array brackets
        "array-bracket-spacing": [2, "never"],
        // disallow or enforce spaces inside of single line blocks
        "block-spacing": [2, "always"],
        // enforce one true brace style
        "brace-style": [2],
        // require camel case names
        "camelcase": [2, {
            "properties": "always"
        }],
        // enforce spacing before and after comma
        "comma-spacing": [2, {
            "before": false,
            "after": true
        }],
        // enforce one true comma style
        "comma-style": [2, "last"],
        // require or disallow padding inside computed properties
        "computed-property-spacing": [2, "never"],
        // enforce consistent naming when capturing the current execution context
        "consistent-this": [2, "self"],
        // enforce newline at the end of file, with no multiple empty lines (fixable)
        "eol-last": [2],
        // require function expressions to have a name
        "func-names": [0],
        // enforce use of function declarations or expressions
        "func-style": [2, "declaration"],
        // this option enforces minimum and maximum identifier lengths (variable names, property names etc.)
        "id-length": [2, {
            "min": 1,
            "max": 100,
            "properties": "always",
            "exceptions": ["x"]
        }],
        // require identifiers to match the provided regular expression
        "id-match": [2, "", {
            "properties": false
        }],
        // specify tab or space width for your code (fixable)
        "indent": [2, 4, {
            "SwitchCase": 1
        }],
        // specify whether double or single quotes should be used in JSX attributes
        "jsx-quotes": [2, "prefer-double"],
        // enforce spacing between keys and values in object literal properties
        "key-spacing": [2, {
            "beforeColon": false,
            "afterColon": true
        }],
        // enforce empty lines around comments
        "lines-around-comment": [2, {
            "beforeBlockComment": true,
            "beforeLineComment": true
        }],
        // disallow mixed 'LF' and 'CRLF' as linebreaks
        "linebreak-style": [2, "unix"],
        // specify the maximum depth callbacks can be nested
        "max-nested-callbacks": [2, 5],
        // require a capital letter for constructors
        "new-cap": [2, {
            "newIsCap": true,
            "capIsNew": true,
            "newIsCapExceptions": [],
            "capIsNewExceptions": [],
            "properties": true
        }],
        // disallow the omission of parentheses when invoking a constructor with no arguments
        "new-parens": [2],
        // require or disallow an empty newline after variable declarations
        "newline-after-var": [2, "always"],
        // disallow use of the Array constructor
        "no-array-constructor": [2],
        // disallow use of the continue statement
        "no-continue": [1],
        // disallow comments inline after code
        "no-inline-comments": [2],
        // disallow if as the only statement in an else block
        "no-lonely-if": [2],
        // disallow mixed spaces and tabs for indentation (recommended)
        "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
        // disallow multiple empty lines
        "no-multiple-empty-lines": [2, {
            "max": 2
        }],
        // disallow nested ternary expressions
        "no-nested-ternary": [2],
        // disallow the use of the Object constructor
        "no-new-object": [2],
        // disallow use of certain syntax in code
        "no-restricted-syntax": [2, "WithStatement"],
        // disallow space between function identifier and application (fixable)
        "no-spaced-func": [2],
        // disallow the use of ternary operators
        "no-ternary": [1],
        // disallow trailing whitespace at the end of lines (fixable)
        "no-trailing-spaces": [2, {
            "skipBlankLines": true
        }],
        // disallow dangling underscores in identifiers
        "no-underscore-dangle": [0],
        // disallow the use of ternary operators when a simpler alternative exists
        "no-unneeded-ternary": [2, {
            "defaultAssignment": true
        }],
        // require or disallow padding inside curly braces
        "object-curly-spacing": [2, "always", {
            "objectsInObjects": false,
            "arraysInObjects": false
        }],
        // require or disallow one variable declaration per function
        "one-var": [2, {
            "uninitialized": "always",
            "initialized": "never"
        }],
        // require assignment operator shorthand where possible or prohibit it entirely
        "operator-assignment": [2, "always"],
        // enforce operators to be placed before or after line breaks
        "operator-linebreak": [2, "before"],
        // enforce padding within blocks
        "padded-blocks": [2, "never"],
        // require quotes around object literal property names
        "quote-props": [2, "as-needed"],
        // specify whether backticks, double or single quotes should be used (fixable)
        "quotes": [2, "single"],
        // Require JSDoc comment
        "require-jsdoc": [2],
        // enforce spacing before and after semicolons
        "semi-spacing": [2, {
            "before": false,
            "after": true
        }],
        // require or disallow use of semicolons instead of ASI (fixable)
        "semi": [2, "always"],
        // sort variables within the same declaration block
        "sort-vars": [2, {
            "ignoreCase": true
        }],
        // require a space after certain keywords (fixable)
        "space-after-keywords": [2, "always"],
        // require a space before certain keywords (fixable)
        "space-before-keywords": [2, "always"],
        // require or disallow a space before blocks (fixable)
        "space-before-blocks": [2, "always"],
        // require or disallow a space before function opening parenthesis (fixable)
        "space-before-function-paren": [2, {
            "anonymous": "always",
            "named": "never"
        }],
        // require or disallow spaces inside parentheses
        "space-in-parens": [2, "never"],
        // require spaces around operators (fixable)
        "space-infix-ops": [2, {
            "int32Hint": false
        }],
        // require a space after return, throw, and case (fixable)
        "space-return-throw-case": [2],
        // require or disallow spaces before/after unary operators
        "space-unary-ops": [1, {
            "words": true,
            "nonwords": false
        }],
        // require or disallow a space immediately following the // or /* in a comment
        "spaced-comment": [2, "always"],
        // require regex literals to be wrapped in parentheses
        "wrap-regex": [2],

        // ECMAScript 6: http://eslint.org/docs/rules/#ecmascript-6
        // --------------------------------------------------------

        // require parens in arrow function arguments
        "arrow-parens": [2, "as-needed"],
        // require space before/after arrow function's arrow
        "arrow-spacing": [2, {
            "before": true,
            "after": true
        }],
        // verify calls of super() in constructors
        "constructor-super": [2],
        // enforce spacing around the * in generator functions
        "generator-star-spacing": [2, {
            "before": true,
            "after": true
        }],
        // disallow modifying variables of class declarations
        "no-class-assign": [2],
        // disallow modifying variables that are declared using const
        "no-const-assign": [2],
        // disallow duplicate name in class members
        "no-dupe-class-members": [2],
        // disallow use of this/super before calling super() in constructors.
        "no-this-before-super": [2],
        // require let or const instead of var
        "no-var": [2],
        // require method and property shorthand syntax for object literals
        "object-shorthand": [2, "always"],
        // suggest using arrow functions as callbacks
        "prefer-arrow-callback": [2],
        // suggest using const declaration for variables that are never modified after declared
        "prefer-const": [0],
        // suggest using the spread operator instead of .apply().
        "prefer-spread": [2],
        // suggest using Reflect methods where applicable
        "prefer-reflect": [2],
        // suggest using template literals instead of strings concatenation
        "prefer-template": [2],
        // disallow generator functions that do not have yield
        "require-yield": [2],

        // Legacy: http://eslint.org/docs/rules/#legacy
        // --------------------------------------------

        // specify the maximum depth that blocks can be nested
        "max-depth": [2, 10],
        // specify the maximum length of a line in your program
        "max-len": [2, 120, 4, {
            "ignoreComments": true,
            "ignoreUrls": true,
            "ignorePattern": ""
        }],
        // limits the number of parameters that can be used in the function declaration.
        "max-params": [2, 10],
        // specify the maximum number of statement allowed in a function
        "max-statements": [2, 15],
        // disallow use of bitwise operators
        "no-bitwise": [2],
        // disallow use of unary operators, ++ and --
        "no-plusplus": [0]
    },

    // Specifying Language Options: http://eslint.org/docs/user-guide/configuring#specifying-language-options
    // ------------------------------------------------------------------------------------------------------

    "ecmaFeatures": {
        // enable arrow functions
        "arrowFunctions": true,
        // enable binary literals
        "binaryLiterals": true,
        // enable let and const (aka block bindings)
        "blockBindings": true,
        // enable classes
        "classes": true,
        // enable default function parameters
        "defaultParams": true,
        // enable destructuring
        "destructuring": true,
        // enable for-of loops
        "forOf": true,
        // enable generators
        "generators": true,
        // enable modules and global strict mode
        "modules": true,
        // enable computed object literal property names
        "objectLiteralComputedProperties": true,
        // enable duplicate object literal properties in strict mode
        "objectLiteralDuplicateProperties": false,
        // enable object literal shorthand methods
        "objectLiteralShorthandMethods": true,
        // enable object literal shorthand properties
        "objectLiteralShorthandProperties": true,
        // enable octal literals
        "octalLiterals": false,
        // enable the regular expression u flag
        "regexUFlag": true,
        // enable the regular expression y flag
        "regexYFlag": true,
        // enable the rest parameters
        "restParams": true,
        // enable the spread operator for arrays
        "spread": true,
        // enable super references inside of functions
        "superInFunctions": true,
        // enable template strings
        "templateStrings": true,
        // enable code point escapes
        "unicodeCodePointEscapes": true,
        // allow return statements in the global scope
        "globalReturn": false,
        // enable JSX
        "jsx": false,
        // enable support for the experimental object rest/spread properties (IMPORTANT: This is an experimental feature that may change significantly in the future. It's recommended that you do not write rules relying on this functionality unless you are willing to incur maintenance cost when it changes.)
        "experimentalObjectRestSpread": true
    },

    // Specifying Environments: http://eslint.org/docs/user-guide/configuring#specifying-environments
    // ----------------------------------------------------------------------------------------------

    "env": {
        // browser global variables.
        "browser": false,
        // Node.js global variables and Node.js scoping.
        "node": false,
        // CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack).
        "commonjs": false,
        // web workers global variables.
        "worker": false,
        // defines require() and define() as global variables as per the amd spec.
        "amd": false,
        // adds all of the Mocha testing global variables.
        "mocha": false,
        // adds all of the Jasmine testing global variables for version 1.3 and 2.0.
        "jasmine": true,
        // Jest global variables.
        "jest": false,
        // PhantomJS global variables.
        "phantomjs": false,
        // Protractor global variables.
        "protractor": false,
        // QUnit global variables.
        "qunit": false,
        // jQuery global variables.
        "jquery": false,
        // Prototype.js global variables.
        "prototypejs": false,
        // ShellJS global variables.
        "shelljs": false,
        // Meteor global variables.
        "meteor": false,
        // MongoDB global variables.
        "mongo": false,
        // AppleScript global variables.
        "applescript": false,
        // Java 8 Nashorn global variables.
        "nashorn": false,
        // Service Worker global variables.
        "serviceworker": false,
        // Ember test helper globals.
        "embertest": false,
        // enable all ECMAScript 6 features except for modules.
        "es6": false
    }
};