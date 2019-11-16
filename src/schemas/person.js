const Joi = require('happy/joi');

module.exports=Joi.object({
  name: joi.string().required()
});
