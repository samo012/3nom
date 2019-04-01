var express = require("express");
// var path = require("path");
var bodyParser = require("body-parser");
// var mongodb = require("mongodb");
// var MongoClient = require('mongodb').MongoClient;
// var ObjectID = mongodb.ObjectID;
// var http = require('http');

// var SPEAKERS_COLLECTION = "speakers";

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

  var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
// var db;

// Connect to the database before starting the application server. 

// http.get('https://api.itorah.com/api/Speakers/allspeakers').then(function(err, response) {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }
//   db = response.data;

//   // Save database object from the callback for reuse.
//   console.log("Database connection ready");

//   // Initialize the app.
//   var server = app.listen(process.env.PORT || 8080, function () {
//     var port = server.address().port;
//     console.log("App now running on port", port);
//   });
// });

// // SPEAKERS API ROUTES BELOW

// // Generic error handler used by all endpoints.
// function handleError(res, reason, message, code) {
//   console.log("ERROR: " + reason);
//   res.status(code || 500).json({"error": message});
// }

//   "/speakers"
//  *    GET: finds all speakers
//  *    POST: creates a new contact
 

// app.get("/speakers", function(req, res) {
//   db.collection(SPEAKERS_COLLECTION).find({}).toArray(function(err, docs) {
//     if (err) {
//       handleError(res, err.message, "Failed to get speakers.");
//     } else {
//       res.status(200).json(docs);  
//     }
//   });
// });



// /*  "/speakers/:id"
//  *    GET: find contact by id
//  *    PUT: update contact by id
//  *    DELETE: deletes contact by id
//  */

// app.get("/speakers/:id", function(req, res) {
//   db.collection(SPEAKERS_COLLECTION).findOne({ _id: new ObjectID(req.params.id) }, function(err, doc) {
//     if (err) {
//       handleError(res, err.message, "Failed to get contact");
//     } else {
//       res.status(200).json(doc);  
//     }
//   });
// });



