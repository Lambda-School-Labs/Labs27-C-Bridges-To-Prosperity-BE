const data = require('../../postImages/results.json');
const fs = require('fs');

// read JSON object from file
fs.readFile(data, 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }

  // parse JSON object
  const user = JSON.parse(data.toString());

  // print JSON object
  console.log(user);
});