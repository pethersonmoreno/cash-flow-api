const firebase = require('firebase/app');
require('firebase/firestore');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

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

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  if (!process.env.FIREBASE_SERVE) {
    // eslint-disable-next-line no-console
    console.log(`Server started http://localhost:${port}`);
  }
});

module.exports = server;
