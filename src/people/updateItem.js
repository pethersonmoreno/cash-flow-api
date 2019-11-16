const { COLLATION_NAME, PARAM_ROUTE_NAME } = require('./constants');
const schema = require('../schemas/person');
const createUpdateDocumentHandler = require('../factories/createUpdateDocumentHandler');

module.exports = createUpdateDocumentHandler(
  COLLATION_NAME,
  PARAM_ROUTE_NAME,
  schema
);
