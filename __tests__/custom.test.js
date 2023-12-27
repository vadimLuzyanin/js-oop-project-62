import { test, expect } from "@jest/globals";
import Validator from "../index.js";

test("custom", () => {
  const v = new Validator();

  const fn1 = (value, start) => value.startsWith(start);
  // Метод добавления новых валидаторов
  // addValidator(type, name, fn)
  v.addValidator("string", "startWith", fn1);

  // Новые валидаторы вызываются через метод test
  const schema1 = v.string().test("startWith", "H");
  expect(schema1.isValid("exlet")).toBe(false); // false
  expect(schema1.isValid("Hexlet")).toBe(true); // true

  const fn2 = (value, min) => value >= min;
  v.addValidator("number", "min", fn2);

  const schema2 = v.number().test("min", 5);
  expect(schema2.isValid(4)).toBe(false); // false
  expect(schema2.isValid(6)).toBe(true); // true

  expect(() => v.number().test("notExists", 42)).toThrow();
});
