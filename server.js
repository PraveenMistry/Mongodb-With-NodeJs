var MongoClient = require('mongodb').MongoClient;

var insertDocument = function(db, callback) {
   db.collection('demo').insertOne({
   		"id":1,
   		"name":"demo_name",
   		"email":"demo_email"},
   		function(err, result) {
	    console.log("Inserted a document into the demo collection.");
	    callback();
	   })
   }

//fetch data from mongodb demo table
 MongoClient.connect('mongodb://localhost:27017/demo', function(err, db) {
  if (err) {
    throw err;
 }
  db.collection('demo').find().toArray(function(err, result) {
    if (err) {
      throw err;
    }
    console.log(result);
  });
});

//insert
//MongoClient.connect('mongodb://localhost:27017/demo', function(err, db) {
//  insertDocument(db, function() {
//      db.close();
//  });
//});