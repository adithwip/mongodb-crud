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


let insertDocument = (req, res) => {
  MongoClient.connect(url, function(err, db) {
    console.log("Connected correctly to server");

    var col = db.collection('books')
    // Insert a single document
    col.insertOne({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: parseInt(req.body.stock)
    })
    .then(doc_inserted => {
      res.send(doc_inserted);
    })
    .catch(err => {
      res.status(500).send(err);
    })

      db.close();
    });
}

let removeDocument = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    console.log("Connected correctly to server");

    var col = db.collection('books');

    col.deleteOne({ _id: ObjectID(req.params.id) })
    .then(() => {
      res.send('Delete success')
    })
    .catch(err => {
      res.status(500).send(err)
    })

      db.close();
    })
}

let updateDocument = (req, res) => {
  MongoClient.connect(url, (err, db) => {
    console.log("Connected correctly to server");

    var col = db.collection('books');

    col.updateOne({
       _id: ObjectID(req.params.id)
     }, {
       $set: {
         isbn: req.body.isbn,
         title: req.body.title,
         author: req.body.author,
         category: req.body.category,
         stock: parseInt(req.body.stock)
       }
     })
    .then((doc_updated) => {
      res.send(doc_updated)
    })
    .catch(err => {
      res.status(500).send(err)
    })

      db.close();
    })
}

module.exports = {
  findAllBooks,
  findBookById,
  insertDocument,
  removeDocument,
  updateDocument
}
