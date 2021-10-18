//Bring in the express server and create app
let express = require('express'); /* The require() function goes in and brings in libraries/modules in the
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
// Create GET/search?id=n&name=str to search for pies by 'id' & or 'name'.
/* router.get('/search', function (req, res, next) {
  let searchObject = {
    "id": req.query.id,
    "name": req.query.name

  }; */

/* Create a 2nd router.get to return a single pie. The'/:id' is a parameter that defines an argument that
is coming into this endpoint. Ex: http://localhost:5000/api/1. The 1 mapped at the end is the id parameter. */
router.get('/:id', function (req, res, next) {
  pieRepo.getById(req.params.id, function(data) {
    if(data) {
      res.json( {
        "status": 200,
        "statusText": "OK",
        "message": "Retrieved a single pie",
        "data": data
      });
    }
    else {
      res.status(404).json({
        "status": 404,
        "statusText": "Not Found",
        "message": "The requested pie '" + req.params.id + " could not be found.",
        "error": {
          "code": "NOT_FOUND",
          "message": "The requested pie '" + req.params.id + " could not be found."
        }
      });
    }
  }, function(err) {
    next(err);
  });

});

/* req.params.id is an object that takes the id #, passes it in a function with a (data) parameter and if there
is data, a single pie is retrieved. Else, an error message shows up. A good practice is to always put in 
some sort or "error" property for status 404 messages.*/

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
