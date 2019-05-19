require('dotenv').config(); // .env 파일에서 환경변수 불러오기

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
//const api = require('./api');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Node 의 네이티브 Promise 사용
// mongodb 연결
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
}).then(
    (response) => {
        console.log('Successfully connected to mongodb');
    }
).catch(e => {
    console.error(e);
});

const port = process.env.PORT || 4000; // PORT 값이 설정되어있지 않다면 4000 을 사용합니다.

//router.use('/api', api.routes()); // api 라우트를 /api 경로 하위 라우트로 설정

router.get("../../", async(ctx,next)=>{
    ctx.status = HttpStatus.OK;
    await next();
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log('junpyo server is listening to port ' + port);
});