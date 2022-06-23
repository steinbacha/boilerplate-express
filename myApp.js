const { application } = require('express');
let express = require('express');
const req = require('express/lib/request');
let app = express();

require('dotenv').config();

let loggerResponse = req.method + " " + req.path + " - " + req.ip;
app.use(function middleware(req, req, next) {
    console.log(loggerResponse)
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

































 module.exports = app;
