const idSchema = require('../../schemas/id');
const person = require('./personSchema');

module.exports = {
  body: person,
  params: {
    id: idSchema.required()
  }
};
