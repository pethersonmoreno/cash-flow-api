const express = require('express');
const validate = require('express-validation');
const controller = require('./controllers');
const validations = require('./validations');

const router = express.Router();

router
  .route('/')
  .get(validate(validations.listPeople), controller.common.list)
  .post(validate(validations.createPerson), controller.common.create);

router
  .route('/:id')
  .get(
    validate(validations.getPerson),
    controller.common.load('id'),
    controller.common.get
  )
  .put(
    validate(validations.replacePerson),
    controller.common.load('id'),
    controller.common.replace
  );

module.exports = router;
