const fs = require('fs');
// read JSON object from file
var seedData = []
const x = fs.readFile('results.json', 'utf-8', (err, data) => {
  // parse JSON object
    const sData = JSON.parse(data.toString());
    seedData = sData

});

function readFile() {
  fs.readFile('results.json','utf-8',(err,data)=>JSON)
}

x()


console.log(seedData)