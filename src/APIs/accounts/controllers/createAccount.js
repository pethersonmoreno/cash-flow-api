const { COLLATION_NAME } = require('../constants');
const createCreateController = require('../../../factories/controllers/createCreateController');

module.exports = createCreateController(COLLATION_NAME);
