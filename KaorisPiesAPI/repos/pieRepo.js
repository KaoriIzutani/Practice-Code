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
const { resolve } = require('path');
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
  },
  getById: function (id, resolve, reject) {
    fs.readFile(FILE_NAME, function (err, data) {
      if (err) {
        reject(err);
      }
      else { let pie = JSON.parse(data).find(p => p.id == id);
        resolve(pie); /* The else statement says to find a JSON object to parse. With arrow notation, 
        you're telling the program to go through each pie and find a pie equal to an id that user 
        passed into the getByID function. (The # is passed or entered at the end of 
        https://localhost:5000/api/__(the ID #)/ The result is either a pie will pull up or it will be null.*/
        
              
      }
    });
  },
  search: function (searchObject, resolve, reject) {
    fs.readFile(FILE_NAME, function (err, data) {
      if (err) {
        reject(err);
      }
      else {
        let pies = JSON.parse(data);
       //Perform search
       if (searchObject) {
         /*Sample search object
        let searchObject = {
          "id": 1,
          "name": 'A'
        };*/
        pies = pies.filter(
          p => (searchObject.id ? p.id == searchObject.id: true) &&
           (searchObject.name ? p.name.toLowerCase().indexOf(searchObject.name.toLowerCase()) >= 0: true));
    }
/* The first part of the filter function says does the searchObject.id have some sort of value? If yes, then we
check on if p.id is equal to searchObject.id and if so, return true. And is there a value for searchObject.name?
If yes, a case insensitive search is performed. Then it checks if the p.name is within the index of searchObject.
name.toLowerCase. If the value is >=0, then there is a match */
resolve(pies);
  }
}); 
  }
};

module.exports = pieRepo;