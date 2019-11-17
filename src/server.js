const firebase = require('firebase/app');
require('firebase/firestore');
require('dotenv').config();
const express = require('express');
require('express-async-errors');
const bodyParser = require('body-parser');

const unhandledError = require('./middlewares/unhandledError');

const peopleRoutes = require('./people/routes');

firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  projectId: process.env.FIREBASE_PROJECT_ID
});

const app = express();
const router = express.Router();

app.use(bodyParser.json());

peopleRoutes.map(({ path, method, handler }) => router[method](path, handler));

router.get('/', (req, res) => {
  res.send('index test');
});
app.use('/', router);
app.use(unhandledError);

const port = process.env.PORT || 3000;

if (!process.env.FIREBASE_SERVE) {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server started http://localhost:${port}`);
  });
}

module.exports = app;
