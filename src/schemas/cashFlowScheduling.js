const Joi = require('@hapi/joi');

module.exports=Joi.object({
  inOut: Joi.boolean().required(),
  accountId: Joi.string().guid().required(),
  datel: Joi.date().required(),
  value: Joi.number().required(),
  cashFlowDescriptionId: Joi.string().guid().required(),
  repeat: Joi.alternatives(['none','week','month','year']).required()
});
