# eslint-config-piecioshka

[![node version](https://img.shields.io/node/v/eslint-config-piecioshka.svg)](https://www.npmjs.com/package/eslint-config-piecioshka)
[![npm version](https://badge.fury.io/js/eslint-config-piecioshka.svg)](https://badge.fury.io/js/eslint-config-piecioshka)
[![downloads count](https://img.shields.io/npm/dt/eslint-config-piecioshka.svg)](https://www.npmjs.com/package/eslint-config-piecioshka)
[![size](https://packagephobia.com/badge?p=eslint-config-piecioshka)](https://packagephobia.com/result?p=eslint-config-piecioshka)
[![license](https://img.shields.io/npm/l/eslint-config-piecioshka.svg)](https://piecioshka.mit-license.org)
[![github-ci](https://github.com/piecioshka/eslint-config-piecioshka/actions/workflows/testing.yml/badge.svg)](https://github.com/piecioshka/eslint-config-piecioshka/actions/workflows/testing.yml)

🔨 ESLint configuration of my style. All rules was defined.

## Support `Babel.js`

1. Install:

  ```bash
  npm install -D @babel/eslint-parser
  ```

2. Set parser in `.eslintrc.js`:

  ```json
  {
    "parser": "@babel/eslint-parser",
  }
  ```

## Compatibility

Compatible with `ESLint v8.17.0`.

## Usage

Installation:

```bash
npm install -D eslint eslint-config-piecioshka
```

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

## License

[The MIT License](https://piecioshka.mit-license.org) @ 2015
