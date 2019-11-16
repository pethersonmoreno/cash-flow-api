const addDocument = require('../infra/firestore/addDocument');

const createItem = async (req, res) => {
  const item = { ...req.body };
  const { id } = await addDocument('people', item);
  res.json({
    id,
    ...item
  });
};

module.exports = createItem;
