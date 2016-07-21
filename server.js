// Dependencies
var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

// App
var app = express();

app.get('/scrape', function(req, res){

  url = 'http://www.smbc-comics.com/';

  request(url, function(err, response, html){
    if(!error){
      var $ = cheerio.load(html);
      var secret_title;
      var json = {"secret_title": ''};
    }
  });


});

app.listen('8081');

console.log("Magic happens on port 8081");

exports = module.exports = app;
