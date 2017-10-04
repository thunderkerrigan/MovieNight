var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var movieManager = require('./MovieManager');
var bodyParser = require("body-parser");

var app = express();
app.use("/stylesheets", express.static(__dirname + "/stylesheets"));
app.use(favicon(path.join(__dirname, 'images', 'favicon.ico')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'pug')

app.get('/', function (req, res) {
    res.render('index', {
        message: 'Hello there!'
    })
});

app.get('/movies', function (req, res) {
    res.render('Movies', {
        message: 'Hello there!'
    })
});

app.get('/createUser', function (req, res) {
    movieManager.getUsersNames()
        .then(function (users) {
            res.render('createUser', {
                message: "Créer un nouvel utilisateur",
                names: users
            });
        });
});

app.post('/createUser', function (req, res) {
    let b = req.body;
    var message = "";
    movieManager.getUsersNames()
        .then(function (users) {
            if (req.body != undefined && req.body.name != undefined) {
                let newName = req.body.name;
                movieManager.addUser(newName);
                message = "created user " + newName;
            }
            res.render('createUser', {
                message: message,
                names: users
            });
        });
});

app.get('/createDirector', function (req, res) {
    movieManager.getDirectors()
        .then(function (directors) {
            res.render('createDirector', {
                message: "Créer un nouveau réalisateur",
                names: directors
            });
        });
});

app.post('/createDirector', function (req, res) {
    let b = req.body;
    var message = "";
    movieManager.getDirectors()
        .then(function (directors) {
            if (req.body != undefined && req.body.name != undefined) {
                let newName = req.body.name;
                movieManager.addDirector(newName);
                message = "created director " + newName;
            }
            res.render('createDirector', {
                message: message,
                names: directors
            });
        });
});

app.get('/createPolls', function (req, res) {
    movieManager.getDirectors()
        .then(function (directors) {
            res.render('createDirector', {
                message: "Créer un nouveau réalisateur",
                names: directors
            });
        });
});

app.post('/createPolls', function (req, res) {
    let b = req.body;
    var message = "";
    movieManager.getDirectors()
        .then(function (directors) {
            if (req.body != undefined && req.body.name != undefined) {
                let newName = req.body.name;
                movieManager.addDirector(newName);
                message = "created director " + newName;
            }
            res.render('createDirector', {
                message: message,
                names: directors
            });
        });
});

app.listen(1234);