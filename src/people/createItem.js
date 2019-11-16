const { COLLATION_NAME } = require('./constants');
const schema = require('../schemas/person');
const createCreateDocumentHandler = require('../factories/createCreateDocumentHandler');

module.exports = createCreateDocumentHandler(COLLATION_NAME, schema);
