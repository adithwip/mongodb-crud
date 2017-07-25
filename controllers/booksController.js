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

    //Kalo findOne kudu pake promise, karena dia gak butuh .toArray()
    //Kalo mau gak pake promise ya sama aja kayak find() yang di atas,
    //cuma bedanya dia ada isinya di dalam parameter,
    //find({ _id: ObjectID(req.params.id)}) <- nih contoh!
    col.findOne({ _id: ObjectID(req.params.id) })
    .then(docs => {
      res.send(docs)
    })
    .catch(err => {
      res.status(500).send(err)
    })
      db.close();
    })
}


module.exports = {
  findAllBooks,
  findBookById
}
