const { COLLATION_NAME, LOCAL_NAME } = require('../constants');
const createLoadController = require('../../factories/controllers/createLoadController');

module.exports = createLoadController(COLLATION_NAME, LOCAL_NAME);
