const unhandledError = (error, req, res, next) => {
  res.status(500).send(`Internal error: ${error.message}`);
  next(error);
};

module.exports = unhandledError;
