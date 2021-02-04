var express = require('express');
var router  = express.Router();

var product_controller = require('../controllers/product_controller');

router.get('/', product_controller.index);
router.get('/products', product_controller.products);
router.delete('/delete/:id', product_controller.delete);
router.post('/create/:prodName/:prodDesc', product_controller.create);
router.put('/update/:prodName/:prodDesc/:id', product_controller.update)

module.exports = router;