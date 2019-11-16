const getCollection = require('./getCollection');

const getDocument = (collection, documentPath, data) => getCollection(collection)
    .doc(documentPath)
    .set(data);

module.exports = getDocument;
