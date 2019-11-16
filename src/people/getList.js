const firebase = require('firebase/app');

const getList = async (req, res) => {
  const db = firebase.firestore();
  const snapshot = await db.collection('people').get();
  const list = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  res.json(list);
};

module.exports = getList;
