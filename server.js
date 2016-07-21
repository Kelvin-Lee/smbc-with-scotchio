// Dependencies
var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

// App
var app = express();

app.get('/scrape', function(req, res){
  // All scraping magic happens in here
});

app.listen('8081');

console.log("Magic happens on port 8081");

exports = module.exports = app;
