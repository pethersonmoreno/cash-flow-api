const firebase = require('firebase/app');

const getCollection = collection => firebase.firestore().collection(collection);

module.exports = getCollection;
