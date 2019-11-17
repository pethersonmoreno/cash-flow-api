const express = require('express');
const validate = require('express-validation');
const controller = require('./controllers');
const validations = require('./validations');

const router = express.Router();

router
  .route('/')
  .get(validate(validations.listPeople), controller.listPeople)
  .post(validate(validations.createPerson), controller.createPerson);

router
  .route('/:id')
  .get(
    validate(validations.getPerson),
    controller.loadPerson('id'),
    controller.getPerson
  )
  .put(
    validate(validations.replacePerson),
    controller.loadPerson('id'),
    controller.replacePerson
  );

module.exports = router;
