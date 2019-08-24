'use strict';

var config = require('../../index');

describe('is setup?', function () {
    it('should contains 3 parts', function () {
        expect(config.rules).toBeDefined();
        expect(config.parserOptions).toBeDefined();
        expect(config.parserOptions.ecmaFeatures).toBeDefined();
        expect(config.env).toBeDefined();
    });
});
