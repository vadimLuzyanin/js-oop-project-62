import CustomValidators from './CustomValidators.js';
import ArraySchema from './schemas/ArraySchema.js';
import NumberSchema from './schemas/NumberSchema.js';
import ObjectSchema from './schemas/ObjectSchema.js';
import StringSchema from './schemas/StringSchema.js';

export default class Validator {
  constructor() {
    this.customValidators = new CustomValidators();
  }

  string() {
    return new StringSchema(this.customValidators);
  }

  number() {
    return new NumberSchema(this.customValidators);
  }

  array() {
    return new ArraySchema(this.customValidators);
  }

  object() {
    return new ObjectSchema(this.customValidators);
  }

  addValidator(type, name, fn) {
    this.customValidators.addValidator(type, name, fn);
  }
}
