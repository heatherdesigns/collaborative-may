const fs = require('fs');
fs.readFile('Winners.csv', function(err, data) {
  const lines = data.toString().split(/\n/);
  const records = lines.map(function(line) {
    // TODO: Account for data that contains commas (wrapped in quotes)
    return line.split(',');
  });
  console.log(records);
});
