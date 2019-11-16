const addDocument = require('../infra/firestore/addDocument');
const person = require('../schemas/person.js');

const createItem = async (req, res) => {
  const { error, item } = schema.validate(req.body);
  if(error){
    return req.status(400).send(error.message);
  }
  const { id } = await addDocument('people', item);
  res.json({
    id,
    ...item
  });
};

module.exports = createItem;
