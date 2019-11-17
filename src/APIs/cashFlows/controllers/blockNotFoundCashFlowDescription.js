/* eslint-disable require-atomic-updates */
const { LOCAL_NAME } = require('../constants');
const getDocument = require('../../../helpers/firestore/getDocument');
const ValidationError = require('../../../errors/ValidationError');
const mapDocumentToData = require('../../../mappers/documentToData');

const isUpdateNotChangingCashFlowDescription = req => req.locals &&
  req.locals[LOCAL_NAME] &&
  req.locals[LOCAL_NAME].cashFlowDescriptionId ===
    req.body.cashFlowDescriptionId;

const blockNotFoundCashFlowDescription = async (req, res, next) => {
  if (isUpdateNotChangingCashFlowDescription(req)) {
    return next();
  }
  try {
    const cashFlowDescriptionDoc = await getDocument(
      'cashFlowDescriptions',
      req.body.cashFlowDescriptionId
    );
    if (!cashFlowDescriptionDoc.exists) {
      throw new ValidationError({
        errors: [
          {
            field: ['cashFlowDescriptionId'],
            location: 'body',
            messages: [
              `Not found cash flow description with id "${req.body.cashFlowDescriptionId}"`
            ],
            types: []
          }
        ]
      });
    }
    const cashFlowDescription = mapDocumentToData(cashFlowDescriptionDoc);
    if (!req.locals) {
      req.locals = {};
    }
    req.locals.cashFlowDescription = cashFlowDescription;
    return next();
  } catch (error) {
    return next(error);
  }
};

module.exports = blockNotFoundCashFlowDescription;
