const idSchema = require('../../../schemas/id');
const accountSchema = require('./accountSchema');

module.exports = {
  body: accountSchema,
  params: {
    id: idSchema.required()
  }
};
