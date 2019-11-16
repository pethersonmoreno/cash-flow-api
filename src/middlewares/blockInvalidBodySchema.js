const blockInvalidBodySchema = (schema, next) => async (req, res) => {
  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.status(400).send(error.message);
  }
  if (!req.context) {
    req.context = {};
  }
  req.context.bodyValidated = value;
  return next(req, res);
};

module.exports = blockInvalidBodySchema;
