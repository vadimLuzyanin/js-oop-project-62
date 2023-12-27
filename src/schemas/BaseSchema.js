export default class BaseSchema {
  validatorChain = [];

  addValidator(fn) {
    this.validatorChain.push(fn);
  }

  isValid(data) {
    const res = this.validatorChain.every((fn) => fn(data));
    console.log(res);
    return res;
  }
}
