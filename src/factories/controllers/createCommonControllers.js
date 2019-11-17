const createLoadController = require('./createLoadController');
const createListController = require('./createListController');
const createGetItemController = require('./createGetItemController');
const createCreateController = require('./createCreateController');
const createReplaceController = require('./createReplaceController');

const createCommonControllers = (collationName, localName, perPageDefault) => {
  const load = createLoadController(collationName, localName);
  const list = createListController(collationName, perPageDefault);
  const get = createGetItemController(localName);
  const create = createCreateController(collationName);
  const replace = createReplaceController(collationName, localName);
  return {
    load,
    list,
    get,
    create,
    replace
  };
};

module.exports = createCommonControllers;
