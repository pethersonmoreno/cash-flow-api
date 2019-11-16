const blockInvalidBodySchema = require('../middlewares/blockInvalidBodySchema');
const addDocument = require('../infra/firestore/addDocument');

const createCreateDocumentHandler = (collation, schema) => {
  const updateItemDocument = async (req, res) => {
    const item = req.context.bodyValidated;
    const { id } = await addDocument(collation, item);
    return res.json({ id, ...item });
  };
  return blockInvalidBodySchema(schema, updateItemDocument);
};

module.exports = createCreateDocumentHandler;
