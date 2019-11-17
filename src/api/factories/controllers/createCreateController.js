const addDocument = require('../../helpers/firestore/addDocument');

const createCreateController = collationName => async (req, res) => {
  const { id } = await addDocument(collationName, req.body);
  return res.json({ id, ...req.body });
};

module.exports = createCreateController;
