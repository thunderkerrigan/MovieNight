var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');

var app = express();
app.use("/stylesheets",express.static(__dirname + "/stylesheets"));
app.use(favicon(path.join(__dirname,'images','favicon.ico')));
app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index', { message: 'Hello there!' })
});

app.listen(1234);