'use strict';

const rules = require('../../parts/typescript-rules');

describe('TypeScript rules', () => {
  it('should turn off core no-undef (TypeScript handles it)', () => {
    expect(rules['no-undef']).toEqual(['off']);
  });

  it('should forbid the `any` type', () => {
    expect(rules['@typescript-eslint/no-explicit-any']).toEqual(['error']);
  });

  it('should report unused vars but allow a leading underscore', () => {
    expect(rules['@typescript-eslint/no-unused-vars']).toEqual([
      'error',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ]);
  });

  it('should forbid non-null assertions (`!`)', () => {
    expect(rules['@typescript-eslint/no-non-null-assertion']).toEqual([
      'error',
    ]);
  });

  it('should enforce consistent type imports', () => {
    expect(rules['@typescript-eslint/consistent-type-imports']).toEqual([
      'error',
    ]);
  });

  it('should enforce the `T[]` array style', () => {
    expect(rules['@typescript-eslint/array-type']).toEqual([
      'error',
      { default: 'array' },
    ]);
  });

  it('should prefer Record over index signatures', () => {
    expect(rules['@typescript-eslint/consistent-indexed-object-style']).toEqual(
      ['error', 'record'],
    );
  });

  describe('consistent-type-assertions', () => {
    const config = rules['@typescript-eslint/consistent-type-assertions'];

    it('should be an error', () => {
      expect(config[0]).toBe('error');
    });

    it('should use the `as` style so that `as const` stays allowed', () => {
      expect(config[1].assertionStyle).toBe('as');
    });

    it('should forbid assertions on object and array literals', () => {
      expect(config[1].objectLiteralTypeAssertions).toBe('never');
      expect(config[1].arrayLiteralTypeAssertions).toBe('never');
    });
  });

  it('should set every rule to the `error` severity', () => {
    const severities = Object.values(rules).map((value) =>
      Array.isArray(value) ? value[0] : value,
    );
    const allowed = ['error', 'off'];
    severities.forEach((severity) => {
      expect(allowed).toContain(severity);
    });
  });
});
