const addDocument = require('../infra/firestore/addDocument');
const personSchema = require('../schemas/person.js');

const createItem = async (req, res) => {
  const { error, item } = schema.validate(req.body);
  if(error){
    req.status(400).send(error.message);
    return;
  }
  const { id } = await addDocument('people', item);
  res.json({
    id,
    ...item
  });
};

module.exports = createItem;
