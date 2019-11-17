const express = require('express');
const validate = require('express-validation');
const controller = require('./controllers');
const validations = require('./validations');

const router = express.Router();

router
  .route('/')
  .get(validate(validations.listAccounts), controller.listAccounts)
  .post(
    validate(validations.createAccount),
    controller.blockNotFoundPerson,
    controller.createAccount
  );

router
  .route('/:id')
  .get(
    validate(validations.getAccount),
    controller.loadAccount('id'),
    controller.getAccount
  )
  .put(
    validate(validations.replaceAccount),
    controller.loadAccount('id'),
    controller.blockNotFoundPerson,
    controller.replaceAccount
  );

module.exports = router;
