const Joi = require('@hapi/joi');

module.exports=Joi.object({
  inOut: Joi.boolean().required(),
  accountId: Joi.string().required(),
  datel: Joi.date().required(),
  value: Joi.number().required(),
  cashFlowDescriptionId: Joi.string().required(),
  repeat: Joi.alternatives(['none','week','month','year']).required()
});
