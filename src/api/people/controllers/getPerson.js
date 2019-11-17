const { LOCAL_NAME } = require('../constants');
const createGetItemController = require('../../factories/controllers/createGetItemController');

module.exports = createGetItemController(LOCAL_NAME);
