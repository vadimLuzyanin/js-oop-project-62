import isDefined from '../utils.js';
import BaseSchema from './BaseSchema.js';

export default class ArraySchema extends BaseSchema {
  constructor(props) {
    super(props);
    this.type = 'array';
    this.addValidator((data) => Array.isArray(data) || !isDefined(data));
  }

  required() {
    this.addValidator((data) => isDefined(data));
    return this;
  }

  sizeof(size) {
    this.addValidator((data) => data.length === size);
    return this;
  }
}
