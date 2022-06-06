'use strict';

const config = require('../../index');

describe('is setup?', () => {
  it('should contains 3 parts', () => {
    expect(config.rules).toBeDefined();
    expect(config.parserOptions).toBeDefined();
    expect(config.parserOptions.ecmaFeatures).toBeDefined();
    expect(config.env).toBeDefined();
  });
});
