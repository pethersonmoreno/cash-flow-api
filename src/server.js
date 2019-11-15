const firebase = require('firebase/app');
require('firebase/firestore');
const Koa = require('koa');
const koaRouter = require('koa-route');
const bodyParser = require('koa-bodyparser');
const firebaseConfig = require('../firebaseConfig.json');

firebase.initializeApp(firebaseConfig);

const app = new Koa();

app.use(bodyParser());

app.use(
  koaRouter.get('/', async ctx => {
    ctx.body = 'index test';
  })
);

const port = 3000;

app.listen(port, () => {
  console.log(`Server started http://localhost:${port}`);
});
