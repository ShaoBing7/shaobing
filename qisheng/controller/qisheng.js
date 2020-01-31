const Koa = require('koa');
const app = new Koa();
const cors = require('koa2-cors');
const cloud = require('tcb-admin-node');
const db = cloud.database();
const testuser = db.collection('test_user');



router.get("/list", async (ctx, next) => {
    console.log(ctx.requset.body)
    let res = null;
    res = await testuser.get().then((res)=>{
        return res
    })
        ctx.body = {
            code: 20000,
            data: res
        }
    
})