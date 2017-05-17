//const parse = require('csv-parse');
const fs = require('fs');
const csvjson = require('csv-to-json');

fs.readFile('Winners.csv', function(err, data) {
  // const lines = data.toString().split(/\n/);
  // const records = lines.map(function(line) {
  //   // TODO: Account for data that contains commas (wrapped in quotes)
  //   return line.split(',');
  // });
  // console.log(data.toString());
  // const records = parse("Hello", {""}, function(records) {
  //   console.log(records);
  // });
  //console.log(records);

  var obj = {
    filename: "Winners.csv"
  };
  var callback = function(err, json) {
    console.log(json[0].Winner);
  };
  csvjson.parse(obj, callback);
});
