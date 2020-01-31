const Koa = require('koa');
const app = new Koa();
const cors = require('koa2-cors');
const Router = require('koa-router');
const koaBody = require('koa-body')
const cloud = require('tcb-admin-node');

const router = new Router({
    prefix: "/fellow"
});

app.use(cors({
    // origin: ['http://localhost:9528'],
    origin: function (ctx) {
        return [ctx.request.header.origin];
    },
    maxAge: 5,
    credentials: true
}));
//请求参数格式化
app.use(koaBody());

cloud.init({	
    secretId: 'AKIDWvGbqy450mRny1SykQ2TH2eyBC2ksZls',
    secretKey: 'oRtBKI0eCKH2c4OXWM1Voz1wX2MZdWFq',
    env: "shaobing-658cfd"
});

let student = require('./controller/qisheng.js');
router.use('/qisheng', qisheng.routes());

app.use(router.routes());

app.listen(3000);
console.log("server runing")
