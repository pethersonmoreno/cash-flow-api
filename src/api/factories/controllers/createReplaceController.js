const replaceDocument = require('../../helpers/firestore/replaceDocument');

const createReplaceController = (collationName, localName) => async (
  req,
  res
) => {
  const {
    [localName]: { id }
  } = req.locals;
  await replaceDocument(collationName, id, req.body);
  return res.json({ id, ...req.body });
};

module.exports = createReplaceController;
