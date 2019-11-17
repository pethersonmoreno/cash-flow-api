const Joi = require('@hapi/joi');

module.exports=Joi.object({
  personId: Joi.string().guid(). required(),
  description: Joi.string().min(3).max(30).required()
});
