const Joi = require('@hapi/joi');

module.exports = {
  query: {
    page: Joi.number().min(1),
    perPage: Joi.number()
      .min(1)
      .max(100)
  },
  options: {
    allowUnknownQuery: false
  }
};
