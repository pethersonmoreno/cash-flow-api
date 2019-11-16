const documentExists = require('../infra/firestore/documentExists');
const updateDocument = require('../infra/firestore/updateDocument');
const schema = require ('../schemas/person');

const updateItem = async (req, res) => {
  const { id } = req.params;
  if (await documentExists('people', id)) {
    return res.status(404).send('Not found');
  }
  const { error, item } = schema.validate(req.body);
  if(error){
    return req.status(400).send(error.message);
  }
  await updateDocument('people', id, item);
  res.json({ id, ...item });
};

module.exports = updateItem;
