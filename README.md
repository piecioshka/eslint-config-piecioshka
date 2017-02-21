# eslint-config-piecioshka ([npm](https://www.npmjs.com/package/eslint-config-piecioshka))

![](https://img.shields.io/npm/v/eslint-config-piecioshka.svg)
![](https://img.shields.io/npm/dt/eslint-config-piecioshka.svg)
![](https://img.shields.io/npm/l/eslint-config-piecioshka.svg)

> ESLint configuration of my style. All rules was defined.

Last update: `ESLint v3.16.0 released 20 February 2017`

----

## Install

```
$ npm install --save-dev eslint eslint-config-piecioshka
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

Then just lint with `$ npm run lint`.

Rules: http://eslint.org/docs/rules/

## Unit tests

```
$ npm test
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2015
