/* eslint-disable class-methods-use-this */
import ArraySchema from "./schemas/ArraySchema.js";
import BaseSchema from "./schemas/BaseSchema.js";
import NumberSchema from "./schemas/NumberSchema.js";
import ObjectSchema from "./schemas/ObjectSchema.js";
import StringSchema from "./schemas/StringSchema.js";

export default class Validator {
  schema = new BaseSchema();

  string() {
    return new StringSchema();
  }

  number() {
    return new NumberSchema();
  }

  array() {
    return new ArraySchema();
  }

  object() {
    return new ObjectSchema();
  }
}
