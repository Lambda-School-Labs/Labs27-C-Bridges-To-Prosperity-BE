const fs = require('fs');

function readFile() {
  const x = fs.readFile('results.json', 'utf-8', (err, data) => JSON.parse(data.toString()))
  return x
}

console.log(readFile())