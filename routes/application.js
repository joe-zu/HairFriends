const express = require('express');
const router  = express.Router();

const application_controller = require('../controllers/application_controller');
const product_controller = require('../controllers/product_controller');
router.get('/', application_controller.index);


<<<<<<< HEAD
=======


>>>>>>> a051455c3ed68b10fa784d60ef80b34752a3d558
router.get('/products', product_controller.index);
router.delete('/products/delete/:id', product_controller.delete);
router.post('/products/create', product_controller.create);


module.exports = router;