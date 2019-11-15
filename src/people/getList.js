const firebase = require('firebase/app');

const getList = async ctx => {
  const db = firebase.firestore();
  const snapshot = await db.collection('people').get();
  const list = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  ctx.body = list;
};

module.exports = getList;
