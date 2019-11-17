const idSchema = require('../../schemas/id');
const person = require('./person');

module.exports = {
  body: person,
  params: {
    id: idSchema.required()
  }
};
