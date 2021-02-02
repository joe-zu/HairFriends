var express = require('express');
var router  = express.Router();

var form_controller = require('../controllers/form_controller');

router.get('/forms/:id', form_controller.index);

module.exports = router;