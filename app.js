var express = require("express");
var todoController = require('./controller/todoController');

var app = express();
app.set('view engine', 'ejs');

app.use(express.static('./public'));

todoController(app);

app.listen(7000);

console.log('startd-7000')