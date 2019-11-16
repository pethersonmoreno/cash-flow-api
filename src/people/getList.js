const { COLLATION_NAME } = require('./constants');
const createGetDocumentListHandler = require('../factories/createGetDocumentListHandler');

module.exports = createGetDocumentListHandler(COLLATION_NAME);
