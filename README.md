# eslint-config-piecioshka

[![npm version](https://badge.fury.io/js/eslint-config-piecioshka.svg)](https://badge.fury.io/js/eslint-config-piecioshka)
[![downloads count](https://img.shields.io/npm/dt/eslint-config-piecioshka.svg)](https://www.npmjs.com/package/eslint-config-piecioshka)

ESLint configuration of my style. All rules was defined.

## Compatibility

Compatible with `ESLint v8.17.0`.

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

[The MIT License](http://piecioshka.mit-license.org) @ 2015-2022
