import isDefined from '../utils.js';
import BaseSchema from './BaseSchema.js';

export default class NumberSchema extends BaseSchema {
  constructor(props) {
    super(props);
    this.type = 'number';
    this.addValidator((data) => typeof data === 'number' || !isDefined(data));
  }

  required() {
    this.addValidator((data) => isDefined(data));
    return this;
  }

  positive() {
    this.addValidator((data) => !isDefined(data) || data > 0);
    return this;
  }

  range(start, end) {
    this.addValidator((data) => data >= start && data <= end);
    return this;
  }
}
