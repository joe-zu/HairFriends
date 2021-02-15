var express = require('express');
var router  = express.Router();

var form_controller = require('../controllers/form_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");

//gets all NEEDS AUTH
router.get('/auth', isAuthenticated, form_controller.authAll);


//gets all published
router.get('/', form_controller.allPub);


//creates form
router.post('/', form_controller.createForm)

//changes publish boolean
router.put('/auth/publish/:id', isAuthenticated, form_controller.publish);
router.put('/auth/unpublish/:id', isAuthenticated, form_controller.unpublish);
//changes pin boolean
router.put('/auth/pin/:id', isAuthenticated, form_controller.pin);
router.put('/auth/unpin/:id', isAuthenticated, form_controller.unpin);

//deletes form
router.delete('/auth/delete/:id', isAuthenticated, form_controller.delete);

module.exports = router;