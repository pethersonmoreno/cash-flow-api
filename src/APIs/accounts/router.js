const express = require('express');
const validate = require('express-validation');
const controller = require('./controllers');
const validations = require('./validations');

const router = express.Router();

router
  .route('/')
  .get(validate(validations.listAccounts), controller.common.list)
  .post(
    validate(validations.createAccount),
    controller.blockNotFoundPerson,
    controller.common.create
  );

router
  .route('/:id')
  .get(
    validate(validations.getAccount),
    controller.common.load('id'),
    controller.common.get
  )
  .put(
    validate(validations.replaceAccount),
    controller.common.load('id'),
    controller.blockNotFoundPerson,
    controller.common.replace
  );

module.exports = router;
