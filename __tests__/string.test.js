import { test, expect } from "@jest/globals";
import Validator from "../index.js";

test("string", () => {
  const v = new Validator();

  const schema = v.string();

  expect(schema.isValid("")).toBe(true);
  expect(schema.isValid(null)).toBe(true);
  expect(schema.isValid(undefined)).toBe(true);

  schema.required();

  expect(schema.isValid("what does the fox say")).toBe(true);
  expect(schema.isValid("hexlet")).toBe(true);
  expect(schema.isValid(null)).toBe(false);
  expect(schema.isValid("")).toBe(false);

  expect(schema.contains("what").isValid("what does the fox say")).toBe(true);
  expect(schema.contains("whatthe").isValid("what does the fox say")).toBe(
    false
  );

  expect(schema.isValid("what does the fox say")).toBe(false);
});
