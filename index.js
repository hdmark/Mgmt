var express = require("express");
var app = express();

//====================App Config====================//
app.set("view engine", "ejs");
app.use(express.static("public"));

//====================Routes====================//
app.get("/", function(req, res){
	console.log("Somoene was here o.O");
	res.render("index");
});


//====================Server====================//
app.listen(3000, function(){
	console.log("Here we go on port 3000");
});

