export default class BaseSchema {
  constructor(customValidators) {
    this.customValidators = customValidators;
    this.validatorChain = [];
  }

  addValidator(fn) {
    this.validatorChain.push(fn);
  }

  isValid(data) {
    const res = this.validatorChain.every((fn) => fn(data));
    return res;
  }

  test(name, ...args) {
    const fn = this.customValidators.getValidator(this.type, name);
    this.addValidator((data) => fn(data, ...args));
    return this;
  }
}
