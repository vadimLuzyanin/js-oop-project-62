import BaseSchema from './BaseSchema.js';

export default class ObjectSchema extends BaseSchema {
  constructor(props) {
    super(props);
    this.type = 'object';
  }

  shape(objectShape) {
    this.addValidator((data) => {
      const results = Object.entries(objectShape).reduce(
        (acc, [key, validation]) => ({
          ...acc,
          [key]: validation.isValid(data[key]),
        }),
        {},
      );
      return Object.values(results).every((value) => value === true);
    });
  }
}
