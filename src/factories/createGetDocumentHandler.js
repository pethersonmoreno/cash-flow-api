const blockNotFoundDocument = require('../middlewares/blockNotFoundDocument');
const responseDocument = require('../middlewares/responseDocument');

const createGetDocumentHandler = (collation, paramRouteName) => {
  const getDocumentItem = responseDocument(collation, paramRouteName);
  return blockNotFoundDocument(collation, paramRouteName, getDocumentItem);
};

module.exports = createGetDocumentHandler;
