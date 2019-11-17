const Joi = require('@hapi/joi');
const { inOut } = require('../constants');
const idSchema = require('../../../schemas/id');

module.exports = {
  inOut: Joi.valid(inOut.INPUT, inOut.OUTPUT).required(),
  accountId: idSchema.required(),
  dateTime: Joi.date().required(),
  value: Joi.number()
    .invalid(0)
    .required(),
  cashFlowDescriptionId: idSchema.required()
};
