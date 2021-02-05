var express = require('express');
var router  = express.Router();

var form_controller = require('../controllers/form_controller');

//gets all NEEDS AUTH
router.get('/auth', form_controller.authAll);
// router.get('/auth?Pinned', form_controller.authAllPin);
// router.get('/auth?Published', form_controller.authAllPub);
// router.get('/auth?Unpublished', form_controller.authAllUnpub);

//gets all published
router.get('/', form_controller.allPub);
//gets all pinned
//router.get('/api/pin', form_controller.allPin);


//creates form
router.post('/', form_controller.createForm)


//changes publish boolean
router.put('/auth/publish/:id', form_controller.publish);
router.put('/auth/unpublish/:id', form_controller.unpublish);
//changes pin boolean
router.put('/auth/pin/:id', form_controller.pin);
router.put('/auth/unpin/:id', form_controller.unpin);

//deletes form
router.delete('/auth/delete/:id', form_controller.delete);

module.exports = router;