const getList = require('./getList');
const createItem = require('./createItem');
const getItem = require('./getItem');
const updateItem = require('./updateItem');

const routes = [
  {
    path: '/people',
    method: 'get',
    handler: getList
  },
  {
    path: '/people',
    method: 'post',
    handler: createItem
  },
  {
    path: '/people/:id',
    method: 'get',
    handler: getItem
  },
  {
    path: '/people/:id',
    method: 'put',
    handler: updateItem
  }
];

module.exports = routes;
