var express = require('express');
var handlebars = require('express-handlebars').create({defaultLayout:'main'})
var app = express();

app.engine('handlebars', handlebars.engine)

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'handlebars');
// app.set('views', './views');

var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know",
    "whenever possible, keep it simple"
]

app.get('/', function(req, res){
	// res.type("text/html");
	// res.send("<h1>Meadowlark Travel</h1>");
	// var data = {
	// 	items:[
	// 		{name: "<h1>リンゴ</h1>"},
	// 		{name: "<h1>バナナ</h1>"},
	// 		{name: "<h1>スイカ</h1>"}
	// 	]
	// };

	// res.render("./index.ejs", data);
	res.render('home')
});

app.get('/about', function(req, res){
	// res.type("text/plain");
	// res.send("About Meadowlark T$ravle");
	var randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]

	res.render('about', {fortune: randomFortune})
});

app.use(function(req, res){
	// res.type('text/plain');
	// res.status(404);
	// res.send('404 - Not Found');
	res.status(404)
	res.render('404')
});

app.use(function(err, req, res){
	// console.error(err.stack);
	// res.type('text/plain');
	// res.status('500');
	// res.send('500 - Server Error');
	res.status(500)
	res.render('500')
});

app.use(express.static(__dirname  + '/public'))
//module.exports = router;
app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' +
		app.get('port')+ '; press Ctrl-C to terminate');
});
