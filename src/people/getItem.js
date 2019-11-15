const firebase = require('firebase/app');

const getItem = async (ctx, id) => {
  const db = firebase.firestore();
  const doc = await db
    .collection('people')
    .doc(id)
    .get();
  ctx.body = {
    id: doc.id,
    ...doc.data()
  };
};

module.exports = getItem;
