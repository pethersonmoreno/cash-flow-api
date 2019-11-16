const getDocument = require('../infra/firestore/getDocument');

const getItem = async (req, res) => {
  const { id } = req.params;
  const doc = await getDocument('people', id);
  if (doc.exists) {
    res.json({
      id: doc.id,
      ...doc.data()
    });
  } else {
    res.status(404).send('Not found');
  }
};

module.exports = getItem;
