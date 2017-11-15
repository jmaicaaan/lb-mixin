module.exports = (Model, options) => {
  let properties = options.properties;

  properties.forEach((property) => {
    if (typeof property === 'object') {
      Model.validatesPresenceOf(property.field, { message: property.message });
    } else {
      Model.validatesPresenceOf(property, { message: `${property} is required` });
    }
  });
}