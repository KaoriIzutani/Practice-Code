/* let pieRepo = {
    get: function() {
      return [
{  "id": 1, "flavor": "Blueberry"},
{  "id": 2, "flavor": "Cherry" }, 
{  "id": 3, "flavor": "Peach" }
    ];
 }
}; Instead of hard coding in data, we'll pull data instead from the pies.json object. */

let fs = require('fs'); // "fs" is a built-in node module that knows how to read files.
const FILE_NAME = './assets/pies.json';

let pieRepo = {
  get: function (resolve, reject) {
    fs.readFile(FILE_NAME, function (err, data) {
      if (err) {
        reject(err);
      }
      else {
        resolve(JSON.parse(data)); // Here, you're grabbing "data" and converting or parsing it into JSON

      }
      
    });
  }
  };


module.exports = pieRepo;