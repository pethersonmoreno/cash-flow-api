const { COLLATION_NAME, PARAM_ROUTE_NAME } = require('./constants');
const createGetDocumentHandler = require('../factories/createGetDocumentHandler');

module.exports = createGetDocumentHandler(COLLATION_NAME, PARAM_ROUTE_NAME);
