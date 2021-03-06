var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire controller
todoController(app); 

//listening to port
app.listen(2000);
console.log("Listening to port 2000");