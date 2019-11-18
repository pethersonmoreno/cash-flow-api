require('module-alias/register');
const firebase = require('firebase/app');
require('firebase/firestore');
require('dotenv').config();
const express = require('express');
require('express-async-errors');
const bodyParser = require('body-parser');

const notFoundMiddleware = require('./middlewares/notFoundMiddleware');
const errorConverterMiddleware = require('./middlewares/errorConverterMiddleware');
const errorMiddleware = require('./middlewares/errorMiddleware');

const peopleRouter = require('./APIs/people');
const accountsRouter = require('./APIs/accounts');
const cashFlowDescriptionsRouter = require('./APIs/cashFlowDescriptions');
const cashFlowsRouter = require('./APIs/cashFlows');
const cashFlowSchedulesRouter = require('./APIs/cashFlowSchedules');

firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  projectId: process.env.FIREBASE_PROJECT_ID
});

const app = express();
const router = express.Router();

app.use(bodyParser.json());

app.use('/people', peopleRouter);
app.use('/accounts', accountsRouter);
app.use('/cashFlowDescriptions', cashFlowDescriptionsRouter);
app.use('/cashFlows', cashFlowsRouter);
app.use('/cashFlowSchedules', cashFlowSchedulesRouter);

router.get('/', (req, res) => {
  res.send('index test');
});
app.use('/', router);

app.use(notFoundMiddleware);
app.use(errorConverterMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

if (!process.env.FIREBASE_SERVE) {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server started http://localhost:${port}`);
  });
}

module.exports = app;
