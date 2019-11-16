const documentExists = require('../infra/firestore/documentExists');
const updateDocument = require('../infra/firestore/updateDocument');
const schema = require ('../schemas/person');

const blockNotFoundDocument = (collation, paramRouteName, next) => async (req, res) => {
  const docPath = req.params[paramRouteName];
  if (await documentExists(collation, docPath)) {
    return res.status(404).send('Not found');
  }
  return next(req, res);
};


const updateItem = async (req, res) => {
  const { id } = req.params;
  const { error, item } = schema.validate(req.body);
  if(error){
    return req.status(400).send(error.message);
  }
  await updateDocument('people', id, item);
  res.json({ id, ...item });
};

module.exports = blockNotFoundDocument('people', 'id',updateItem);
