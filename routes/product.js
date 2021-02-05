var express = require('express');
var router  = express.Router();

var product_controller = require('../controllers/product_controller');

router.get('/', product_controller.index);
router.delete('/:id', product_controller.delete);
router.post('/', product_controller.create);

module.exports = router;