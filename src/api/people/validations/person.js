const personFields = require('./personFields');

module.exports = {
  name: personFields.name.required()
};
