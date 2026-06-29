'use strict';

const config = require('../../typescript');

describe('TypeScript config', () => {
  it('should be an object', () => {
    expect(typeof config).toBe('object');
  });

  it('should use the @typescript-eslint parser', () => {
    expect(config.parser).toBe('@typescript-eslint/parser');
  });

  it('should register the @typescript-eslint plugin', () => {
    expect(config.plugins).toContain('@typescript-eslint');
  });

  it('should extend the recommended config', () => {
    expect(config.extends).toContain('plugin:@typescript-eslint/recommended');
  });

  it('should define rules and parserOptions', () => {
    expect(config.rules).toBeDefined();
    expect(config.parserOptions).toBeDefined();
  });
});
