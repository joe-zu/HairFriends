var express = require('express');
var router  = express.Router();

var product_controller = require('../controllers/product_controller');

var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/', product_controller.index);

router.get('/auth', isAuthenticated, product_controller.findAll);

router.delete('/auth/delete/:id', isAuthenticated, product_controller.delete);

router.post('/auth', isAuthenticated, product_controller.create);

module.exports = router;