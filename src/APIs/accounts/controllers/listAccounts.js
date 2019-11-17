const { COLLATION_NAME, PER_PAGE_DEFAULT } = require('../constants');
const createListController = require('../../../factories/controllers/createListController');

module.exports = createListController(COLLATION_NAME, PER_PAGE_DEFAULT);
