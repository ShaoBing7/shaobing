const Router = require('koa-router');
let router = new Router();
const cloud = require('tcb-admin-node');
const db = cloud.database();
const storeColl = db.collection('store_user');
//  /student/list

router.get("/add", async (ctx, next) => {
  console.log(ctx.request.body)
  let res = null;
  try{
  res = await storeColl.add({
    data:{
      ...ctx.request.body
    }
  })
  }catch(e){
    console.error(e);
  }
      ctx.body = {
          code: 20000,
          data: res
      }
  
}),


router.post("/del", async (ctx, next) => {
    console.log(ctx.request.body)
    try {
        await testuser.where({
          _id: ctx.request.body.id
        }).remove()
      } catch(e) {
        console.error(e)
      }

    ctx.body={
        code:20000,
        data:"删除成功"
    }
})


module.exports = router;