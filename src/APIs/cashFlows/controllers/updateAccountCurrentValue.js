/* eslint-disable require-atomic-updates */
const { LOCAL_NAME, inOut } = require('../constants');
const updateDocument = require('../../../helpers/firestore/updateDocument');

const isUpdate = req => req.locals && req.locals[LOCAL_NAME];

const isUpdateNotChangingValue = req => isUpdate(req) &&
  req.locals[LOCAL_NAME].value === req.body.value &&
  req.locals[LOCAL_NAME].inOut === req.body.inOut;

const updateAccountCurrentValue = async (req, res, next) => {
  if (isUpdateNotChangingValue(req)) {
    return next();
  }
  try {
    const { account } = req.locals;
    let valueDiff = req.body.value * (req.body.inOut === inOut.INPUT ? 1 : -1);
    if (isUpdate(req)) {
      valueDiff -=
        req.locals[LOCAL_NAME].value *
        (req.locals[LOCAL_NAME].inOut === inOut.INPUT ? 1 : -1);
    }
    await updateDocument('accounts', account.id, {
      currentValue: account.currentValue + valueDiff
    });
    req.locals.updatedAccount = true;
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = updateAccountCurrentValue;
