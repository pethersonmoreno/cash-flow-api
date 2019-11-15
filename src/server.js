const firebase = require('firebase/app');
require('firebase/firestore');
require('dotenv').config();
const Koa = require('koa');
const koaRouter = require('koa-route');
const bodyParser = require('koa-bodyparser');
const peopleRoutes = require('./people/routes');

firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  projectId: process.env.FIREBASE_PROJECT_ID
});

const app = new Koa();

app.use(bodyParser());

peopleRoutes.map(({ path, method, handler }) => app.use(koaRouter[method](path, handler)));

app.use(
  koaRouter.get('/', async ctx => {
    ctx.body = 'index test';
  })
);

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  if (!process.env.FIREBASE_SERVE) {
    // eslint-disable-next-line no-console
    console.log(`Server started http://localhost:${port}`);
  }
});

module.exports = server;
