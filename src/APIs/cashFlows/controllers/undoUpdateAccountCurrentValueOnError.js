const updateDocument = require('../../../helpers/firestore/updateDocument');

const undoUpdateAccountCurrentValueOnError = async (error, req, res, next) => {
  try {
    if (req.locals && req.locals.updatedAccount) {
      const { account } = req.locals;
      await updateDocument('accounts', account.id, {
        currentValue: account.currentValue
      });
    }
    return next(error);
  } catch (errorOnUndo) {
    return next(errorOnUndo);
  }
};

module.exports = undoUpdateAccountCurrentValueOnError;
