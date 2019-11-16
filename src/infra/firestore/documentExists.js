const getDocument = require('./getDocument');

const documentExists = async (collection, documentPath) => {
  const doc = await getDocument(collection, documentPath);
  return doc.exists;
};

module.exports = documentExists;
