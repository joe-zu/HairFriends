var express = require('express');
var router  = express.Router();

var product_controller = require('../controllers/product_controller');

router.get('/', product_controller.index);

router.get('/auth', product_controller.findAll);

router.delete('/auth/delete/:id', product_controller.delete);

router.post('/auth', product_controller.create);

module.exports = router;