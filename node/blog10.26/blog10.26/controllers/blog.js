exports.index=function(req,res,next){
	//console.log(req.session);
	res.render('index_logined',{
		'sess':req.session,
		'title':'laoshan',
	})
}

exports.uindex=function(req,res,next){
	res.render("index");
}