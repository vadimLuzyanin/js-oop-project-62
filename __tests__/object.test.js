import { test, expect } from '@jest/globals';
import Validator from '../index.js';

test('object', () => {
  const v = new Validator();

  const schema = v.object();

  // Позволяет описывать валидацию для свойств объекта
  schema.shape({
    name: v.string().required(),
    age: v.number().positive(),
  });

  expect(schema.isValid({ name: 'kolya', age: 100 })).toBe(true); // true
  expect(schema.isValid({ name: 'maya', age: null })).toBe(true); // true
  expect(schema.isValid({ name: '', age: null })).toBe(false); // false
  expect(schema.isValid({ name: 'ada', age: -5 })).toBe(false); // false
});
