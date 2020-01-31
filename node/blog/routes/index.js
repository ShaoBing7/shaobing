var express = require('express');
var router = express.Router();
var User=require("../controllers/user.js");
var Blog=require("../controllers/blog.js");

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' ,'name':'laoshan'});
});

function checkLogin(req,res,next){
	console.log(req.session);
	if(!req.session.id){
		console.log(45678);
		res.redirect("/login");
	}else{
		console.log(12345);
		next();
	}	
}

router.get("/sindex",checkLogin);
router.get("/sindex",function(req,res,next){
	res.send("login success");
});


//分页
//router.get("/fenye",Blog.fenye);

/*
function a(req,res,next){
	var str="laoshan loves laoxie";
	next(str);
}*/

router.get("/b",User.a,User.bb);

/*
router.get("/b",a,function(str,req,res,next){
	console.log(str);
})*/


//注册功能
router.get("/reg",User.reg);
router.post("/reg",User.do_reg);
router.post("/checkname",User.checkname);

//登录功能
router.get("/login",User.login);
router.post("/login",User.do_login);
router.get("/unlogin",User.unlogin);

//主页功能
router.get("/index",Blog.index);
router.get("/uindex",Blog.uindex);
router.get("/blogs",Blog.aindex);
//文章功能
router.get("/addBlog",Blog.addBlog);
router.post("/addBlog",Blog.do_addBlog);
router.get("/updateblog/:bid",Blog.updateblog);
router.post("/updateblog",Blog.do_updateblog);
router.get("/delete/:bid",Blog.deleteblog);
router.post("/search",Blog.searchblog);
router.get("/blogCatalogs",Blog.blogCatalog);
router.get("/viewPost_comment/:bid",Blog.viewAllPost);


/*
function a(req,res,next){
	var ss="hello,start";
	next(ss);
}*/

/*
router.get("/b",a,function(ss,req,res){
	res.send(ss);
})*/
/*
router.get("/b",a,function(ss,req,res,next){
	res.send(ss);
});*/

/*
router.get("/c",User.a,User.test);
router.get("/test/:id",User.getid);*/

/*
router.get("/parse",function(req,res,next){
	res.render("dns",{
		'name':'laoxie',
		'age':19,
	})
});*/

//router.get("/laoshan",User.arrnum);
/*
router.get("/reg",User.reg);
router.post("/reg",User.do_reg);

router.get("/login",User.login);
router.post("/login",User.do_login);
router.get("/unlogin",User.unlogin);

router.get("/upload",User.upload);
router.post("/upload",User.do_upload);*/

//router.get("/parse",User.parse);
//router.post("/check",User.check);

module.exports = router;
