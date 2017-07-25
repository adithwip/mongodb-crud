var express = require('express');
var router = express.Router();
var controller = require('../controllers/booksController');

/* GET users listing. */
router.get('/', controller.findAllBooks);

router.get('/:id', controller.findBookById);

router.post('/', controller.insertDocument);

router.delete('/:id', controller.removeDocument);

router.put('/:id', controller.updateDocument);

module.exports = router;
