module.exports = (Model, options) => {
  let properties = options.properties;

  properties.forEach((property) => {
    if (typeof property === 'object') {
      Model.validatesUniquenessOf(property.field, { message: property.message });
    } else {
      Model.validatesUniquenessOf(property, { message: `${property} is not unique` });
    }
  });
}