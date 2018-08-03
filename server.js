var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080; //Port 8080 for our 80s survey!!!

app.use(express.static(__dirname + "/app/css"));
app.use(express.static('public')); //this means that i can put images and other files in a public folder and the server can find them

//as an aside, I haven't run into any of the problems described in getting jquery to work fine or linking to css stylesheets
//I'm wondering if doing the above first meant that worked out of the box???

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});