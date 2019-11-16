const documentExists = require('../infra/firestore/documentExists');

const blockNotFoundDocument = (collation, paramRouteName, next) => async (
  req,
  res
) => {
  const docPath = req.params[paramRouteName];
  if (!(await documentExists(collation, docPath))) {
    return res.status(404).send('Not found');
  }
  return next(req, res);
};

module.exports = blockNotFoundDocument;
