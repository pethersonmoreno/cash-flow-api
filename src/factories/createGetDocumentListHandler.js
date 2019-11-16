const firebase = require('firebase/app');
const mapDocumentToData = require('../helpers/mapDocumentToData');

const createGetDocumentListHandler = collation => async (req, res) => {
  const db = firebase.firestore();
  const snapshot = await db.collection(collation).get();
  const list = snapshot.docs.map(mapDocumentToData);
  return res.json(list);
};

module.exports = createGetDocumentListHandler;
