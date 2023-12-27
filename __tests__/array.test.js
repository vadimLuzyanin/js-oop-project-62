import { test, expect } from '@jest/globals';
import Validator from '../index.js';

test('array', () => {
  const v = new Validator();

  const schema = v.array();

  expect(schema.isValid(null)).toBe(true); // true

  schema.required();

  expect(schema.isValid(null)).toBe(false); // false
  expect(schema.isValid([])).toBe(true); // true
  expect(schema.isValid(['hexlet'])).toBe(true); // true

  schema.sizeof(2);

  expect(schema.isValid(['hexlet'])).toBe(false); // false
  expect(schema.isValid(['hexlet', 'code-basics'])).toBe(true); // true
});
