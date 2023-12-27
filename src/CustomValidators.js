export default class CustomValidators {
  constructor() {
    this.customValidators = new Map();
  }

  addValidator(type, name, fn) {
    if (!this.customValidators.get(type)) {
      this.customValidators.set(type, new Map());
    }
    this.customValidators.get(type).set(name, fn);
  }

  getValidator(type, name) {
    const ofType = this.customValidators.get(type);
    if (!ofType) {
      throw new Error(`custom validator for type "${type}" was not found`);
    }
    const validator = ofType.get(name);
    if (!validator) {
      throw new Error(
        `custom validator for type "${type}" named "${name}" was not found`,
      );
    }
    return validator;
  }
}
