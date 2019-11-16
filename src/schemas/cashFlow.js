const Joi = require('@hapi/joi');

module.exports=Joi.object({
  inOut: Joi.boolean().required(),
  accountId: Joi.string().guid().required(),
  dateTime: Joi.date().required(),
  value: Joi.number().required(),
  cashFlowDescriptionId: Joi.string().guid().required(),
});
