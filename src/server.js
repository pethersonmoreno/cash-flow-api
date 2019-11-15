const firebase = require('firebase/app');
require('firebase/firestore');
const Koa = require('koa');
const koaRouter = require('koa-route');
const bodyParser = require('koa-bodyparser');
const firebaseConfig = require('../firebaseConfig.json');
const peopleRoutes = require('./people/routes');

firebase.initializeApp(firebaseConfig);

const app = new Koa();

app.use(bodyParser());

peopleRoutes.map(({ path, method, handler }) =>
  app.use(koaRouter[method](path, handler))
);

app.use(
  koaRouter.get('/', async ctx => {
    ctx.body = 'index test';
  })
);

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server started http://localhost:${port}`);
});

module.exports = server;
