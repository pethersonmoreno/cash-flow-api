const firebase = require('firebase/app');

const updateItem = async (ctx, id) => {
  const db = firebase.firestore();
  const item = { ...ctx.request.body };
  await db
    .collection('people')
    .doc(id)
    .set(item);
  ctx.body = {
    id,
    ...item
  };
};

module.exports = updateItem;
