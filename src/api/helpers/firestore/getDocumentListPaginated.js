const getCollection = require('./getCollection');

const getDocumentListPaginated = async (collationName, page, perPage) => {
  const query = getCollection(collationName);
  const skip = perPage * (page - 1);
  if (skip > 0) {
    const firstDocsSnapshots = await query.limit(skip).get();
    const lastVisible =
      firstDocsSnapshots.docs[firstDocsSnapshots.docs.length - 1];
    return query
      .startAfter(lastVisible)
      .limit(perPage)
      .get();
  }
  return query.limit(perPage).get();
};

module.exports = getDocumentListPaginated;
