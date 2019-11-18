const getDocumentListPaginated = require('../../helpers/firestore/getDocumentListPaginated');

const createListController = (
  collationName,
  perPageDefault,
  mapDocumentToData
) => async (req, res) => {
  const { page = 1, perPage = perPageDefault } = req.query;
  const snapshot = await getDocumentListPaginated(collationName, page, perPage);
  const list = snapshot.docs.map(mapDocumentToData);
  return res.json(list);
};

module.exports = createListController;
