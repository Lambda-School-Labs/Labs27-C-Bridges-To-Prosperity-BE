const fs = require('fs');
// read JSON object from file
var seedData = []
var x = fs.readFile('results.json', 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }

  // parse JSON object
    const sData = JSON.parse(data.toString());
    s

});

console.log(seedData)