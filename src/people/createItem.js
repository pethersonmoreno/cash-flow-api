// const firebase = require('firebase/app');

const createItem = async ctx => {
  // const db = firebase.firestore();
  const item = { ...ctx.request.body };
  const id = 'testing';
  // const { id } = await db.collection('people').add(item);
  ctx.body = {
    id,
    ...item
  };
};

module.exports = createItem;
