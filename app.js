var express = require('express');
var quote = require("./quotes");
var cool = require('cool-ascii-faces');
var app = express();


var index = Math.floor(Math.random()*quote.length+1);

app.use(express.static(__dirname + '/public'));

app.listen(8080, function(){
	console.log('Example app listening on port 8888!');
});

app.get('/api', function(req,res){
	res.send(quote[index]);
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

