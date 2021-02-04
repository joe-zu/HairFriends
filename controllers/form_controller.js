const db = require('../models');


//GET REQUESTS

//all
exports.allForms= (req, res) => {
    db.Forms.findAll({
    }).then(dbForms => {
        //res.render('all-forms', dbForms)
        res.json(dbForms);
    })
}

//published
exports.allPub = (req, res) => {
    db.Forms.findAll({
        where: {
            publish: true
        }
    }).then(dbForms => {
        var hbsObject = {
            comment: dbForms
          };
          //console.dir(hbsObject.comment[0].dataValues);
          //res.json(hbsObject);
        res.render('forms', hbsObject);
    })
}

//POST REQUESTS
exports.createForm = (req, res) => {
    db.Forms.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        body: req.body.formBody,
        publish: true
    }
    ).then(dbPost => {
        res.json(dbPost);
        console.log(dbPost);
    });
}

//PUT REQUESTS

//publish
exports.publish = (req, res) => {
    db.Forms.update({
        publish: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(dbForms => {
        res.json(dbForms)
    });
}
exports.unpublish = (req, res) => {
    db.Forms.update({
        publish: false
    }, {
        where: {
            id: req.params.id
        }
    }).then(dbForms => {
        res.json(dbForms)
    });
}

//pin
exports.pin = (req, res) => {
    db.Forms.update({
        pin: true
    }, {
        where: {
            id: req.params.id
        }
    }).then(dbForms => {
        res.json(dbForms)
    });
}
exports.unpin = (req, res) => {
    db.Forms.update({
        pin: false
    }, {
        where: {
            id: req.params.id
        }
    }).then(dbForms => {
        res.json(dbForms)
    });
}

//DELETE REQUESTS
exports.delete = (req, res) => {
    db.Forms.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbForms => {
        res.json(dbForms)
    });
}