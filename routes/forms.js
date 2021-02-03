var express = require('express');
var router  = express.Router();

var form_controller = require('../controllers/form_controller');

router.get('/', form_controller.index);

//create post with params
//keep id as 1 beacuase there is only one category for now
router.post('/:firstname/:lastname/:body', form_controller.createForm)


//changes publish boolean
router.put('/publish/:id', form_controller.publish);
router.put('/unpublish/:id', form_controller.unpublish);
router.put('/pin/:id', form_controller.pin);
router.put('/unpin/:id', form_controller.unpin);
router.delete('/delete/:id', form_controller.delete);

module.exports = router;