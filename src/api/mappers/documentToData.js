const mapDocumentToData = doc => ({
  id: doc.id,
  ...doc.data()
});

module.exports = mapDocumentToData;
