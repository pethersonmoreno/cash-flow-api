/* eslint-disable require-atomic-updates */
const { LOCAL_NAME } = require('../constants');
const getDocument = require('../../../helpers/firestore/getDocument');
const ValidationError = require('../../../errors/ValidationError');
const mapDocumentToData = require('../../../mappers/documentToData');

const isUpdateNotChangingAccount = req => req.locals &&
  req.locals[LOCAL_NAME] &&
  req.locals[LOCAL_NAME].accountId === req.body.accountId;

const blockNotFoundAccount = async (req, res, next) => {
  if (isUpdateNotChangingAccount(req)) {
    return next();
  }
  try {
    const accountDoc = await getDocument('accounts', req.body.accountId);
    if (!accountDoc.exists) {
      throw new ValidationError({
        errors: [
          {
            field: ['accountId'],
            location: 'body',
            messages: [`Not found account with id "${req.body.accountId}"`],
            types: []
          }
        ]
      });
    }
    const account = mapDocumentToData(accountDoc);
    if (!req.locals) {
      req.locals = {};
    }
    req.locals.account = account;
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = blockNotFoundAccount;
