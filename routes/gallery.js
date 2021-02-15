var express = require('express');
var router  = express.Router();

var gallery_controller = require('../controllers/gallery_controller');

router.get('/', gallery_controller.index);

module.exports = router;