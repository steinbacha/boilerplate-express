const { application } = require('express');
let express = require('express');
const req = require('express/lib/request');
const { nowRouteStackLength } = require('fcc-express-bground/globals');
let app = express();

require('dotenv').config();

app.use(function (req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));


app.get('/json', function(req, res) {
    if (process.env.MESSAGE_STYLE === "uppercase") {    
    res.json({"message": "HELLO JSON"});
    }
    else {
    res.json({"message": "Hello json"});}
});

app.get('/now', (req, res, next) => {
   req.string = new Date().toString();
   next();
}, (req, res) => {
    res.send(req.string);
    next();
});



























 module.exports = app;
