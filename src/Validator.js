import BaseSchema from "./schemas/BaseSchema.js";
import StringSchema from "./schemas/StringSchema.js";

export default class Validator {
  schema = new BaseSchema();

  string() {
    this.schema = new StringSchema();
    return this.schema;
  }
}
