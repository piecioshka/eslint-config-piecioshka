# eslint-config-piecioshka

[![npm version](https://badge.fury.io/js/eslint-config-piecioshka.svg)](https://badge.fury.io/js/eslint-config-piecioshka)
[![downloads count](https://img.shields.io/npm/dt/eslint-config-piecioshka.svg)](https://www.npmjs.com/~piecioshka)
[![travis](https://img.shields.io/travis/piecioshka/eslint-config-piecioshka.svg?maxAge=2592000)](https://travis-ci.org/piecioshka/eslint-config-piecioshka)
[![dependencies](https://david-dm.org/piecioshka/eslint-config-piecioshka.svg)](https://github.com/piecioshka/eslint-config-piecioshka)

ESLint (for v4.3.0) configuration of my style. All rules was defined.

## Compatibility

Compatible with `ESLint v4.3.0`.

## Install

```bash
npm install --save-dev eslint eslint-config-piecioshka
```

## Usage

Add some ESLint config to your `package.json`:

```json
{
    "scripts": {
        "lint": "eslint ."
    },
    "devDependencies": {
        "eslint": "latest",
        "eslint-config-piecioshka": "latest"
    },
    "eslintConfig": {
        "extends": "piecioshka"
    }
}
```

Then just run `npm run lint`.

## Unit tests

```bash
npm test
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2015
