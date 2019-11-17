const { COLLATION_NAME, LOCAL_NAME } = require('../constants');
const createReplaceController = require('../../../factories/controllers/createReplaceController');

module.exports = createReplaceController(COLLATION_NAME, LOCAL_NAME);
