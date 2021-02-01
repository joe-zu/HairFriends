var express = require('express');
var router  = express.Router();

var product_controller = require('../controllers/product_controller');

router.get('/products', product_controller.index);
router.destroy('/', product_controller.index);
router.create('/', product_controller.index);


module.exports = router;