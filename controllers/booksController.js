'use strict'

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/library';
var ObjectID = require('mongodb').ObjectID;

let findAllBooks = (req, res) => {
  MongoClient.connect(url, function(err, db) {
  console.log("Connected correctly to server");

  var col = db.collection('books');

    // Get all the documents that match the query
    col.find().toArray(function(err, docs) {
      // console.log(docs);
      if (!err) {
        res.send(docs)
      } else {
        res.status(500).send(err)
      }
      db.close();
    });
  });
}

let findBookById = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    console.log("Connected correctly to server");

    var col = db.collection('books');

    col.find({ _id: ObjectID(req.params.id) }).toArray((err, docs) => {
      if (!err) {
        res.send(docs)
      } else {
        res.status(500).send(err)
      }
      db.close();
    })
  })
}


module.exports = {
  findAllBooks,
  findBookById
}
