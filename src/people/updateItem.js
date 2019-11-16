const documentExists = require('../infra/firestore/documentExists');
const updateDocument = require('../infra/firestore/updateDocument');

const updateItem = async (req, res) => {
  const { id } = req.params;
  const item = { ...req.body };
  if (await documentExists('people', id)) {
    await updateDocument('people', id, item);
    res.json({
      id,
      ...item
    });
  } else {
    res.status(404).send('Not found');
  }
};

module.exports = updateItem;
