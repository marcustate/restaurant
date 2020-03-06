var express = require("express");

var app = express();
var PORT = 3000;

var tables = [];
var waitList = [];

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});