const getDocument = require('../infra/firestore/getDocument');
const mapDocumentToData = require('../helpers/mapDocumentToData');

const responseDocument = (collation, paramRouteName) => async (req, res) => {
  const docPath = req.params[paramRouteName];
  const doc = await getDocument(collation, docPath);
  return res.json(mapDocumentToData(doc));
};

module.exports = responseDocument;
