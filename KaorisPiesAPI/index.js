//Bring in the express server and create app
let express = require('express'); /* The require()function goes in and brings in libraries/modules in the
node.js path*/
let app = express(); /* express() function creates the Express app. Many other objects are created from 
this object.*/
let pieRepo = require('./repos/pieRepo'); /* Brings in anything you exported from a module.
Module= Small blocks of reusable code that are used as building blocks for a JS app. */

let router = express.Router(); // Anytime you have an endpoint, you have to be able to route to things.
// let pies = pieRepo.get();  Fetches the data from the pieRepo.js module


// Create GET request to return a list of all pies
router.get('/', function (req, res, next){
  //res.status(206).send(pies);  You can change the status message inside ().
  pieRepo.get(function(data) {
  res.json ({
    "status": 200,
    "statusMessage": "OK",
    "message": "Pies menu",
    "data": data

  }); //Successful message
}, function(err) {
  next(err); //This function throws an exception error message.
});
});
// 1st parameter: '/'. means if someone comes into this node/endpoint, please go to the part in {}
// 2nd parameter: A function with the objects [request], [response], and [next]
 

// Configure router so all routes are prefixed with /api/v1
app.use('/api', router);
/* use is a function that adds something to the website's route. In this example, this adds /api to 
 localhost:5000. All REST API's in the server are called like this: https://localhost:5000/api/*/

// Finally, to get the server running, create server to listen on port:5000
var server = app.listen(5000, function() {
    console.log('Node server is running on http://localhost:5000..');
});
// listen() method listens for connections on the host and the port number.
