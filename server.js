// Dependencies
var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

// App
var app = express();

app.get('/scrape', function(req, res){

  var url = 'http://www.smbc-comics.com/';

  request(url, function(err, response, html){
    if(!err){
      var $ = cheerio.load(html);
      var secret_title;
      var json = {"title": ''};

      $('#cc-comic').filter(function(){
        var data = $(this);
        json.title = data.attr('title');
      });      

      fs.writeFile('smbc.json', JSON.stringify(json, null, 4), function(err){
        console.log("File successfully written to smbc.json");
      });
    }
  });

  res.send("Eyy");

});

app.listen('8081');

console.log("Magic happens on port 8081");

exports = module.exports = app;
