var express = require('express');
var router = express.Router();
var controller = require('../controllers/booksController');

/* GET users listing. */
router.get('/', controller.findAllBooks);

router.get('/:id', controller.findBookById);

module.exports = router;
