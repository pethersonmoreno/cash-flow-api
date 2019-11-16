const blockNotFoundDocument = require('../middlewares/blockNotFoundDocument');
const blockInvalidBodySchema = require('../middlewares/blockInvalidBodySchema');
const updateDocument = require('../infra/firestore/updateDocument');

const createUpdateDocumentHandler = (collation, paramRouteName, schema) => {
  const updateItemDocument = async (req, res) => {
    const docPath = req.params[paramRouteName];
    const item = req.context.bodyValidated;
    await updateDocument(collation, docPath, item);
    return res.json({ id: docPath, ...item });
  };
  return blockNotFoundDocument(
    collation,
    paramRouteName,
    blockInvalidBodySchema(schema, updateItemDocument)
  );
};

module.exports = createUpdateDocumentHandler;
