var express = require('express');

var app = express();
var router = express.Router();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', function(req, res){
	res.type("text/html");
	res.send("<h1>Meadowlark Travel</h1>");
});

app.get('/about', function(req, res){
	res.type("text/plain");
	res.send("About Meadowlark T$ravle");
});

app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

app.use(function(err, req, res){
	console.error(err.stack);
	res.type('text/plain');
	res.status('500');
	res.send('500 - Server Error');
});

//module.exports = router;
app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' +
		app.get('port')+ '; press Ctrl-C to terminate');
});
