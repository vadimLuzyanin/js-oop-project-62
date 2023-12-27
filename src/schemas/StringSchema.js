import isDefined from "../utils.js";
import BaseSchema from "./BaseSchema.js";

export default class StringSchema extends BaseSchema {
  type = "string";

  constructor(props) {
    super(props);
    this.addValidator((data) => typeof data === "string" || !isDefined(data));
  }

  required() {
    this.addValidator((data) => !!data);
    return this;
  }

  contains(substring) {
    this.addValidator((data) => data.includes(substring));
    return this;
  }

  minLength(length) {
    this.addValidator((data) => data.length >= length);
    return this;
  }
}
