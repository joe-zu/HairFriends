const db = require('../models');


//GET REQUESTS

// AUTH GETS

//ALL
exports.authAll= (req, res) => {
    console.log("Filter selection: " , req._parsedUrl.query);

    switch (req._parsedUrl.query) {
        case 'Pinned':
            db.Forms.findAll({
                where: {
                    pin: true
                }
            }).then(dbForms => {
                let hbsObjectPin = {
                    comment: dbForms
                };
                // console.log("this is before hbsObjectPin",)
                // console.dir(hbsObjectPin)
                // dbForms.map(form=>console.log(form.firstName, form.lastName))
                // res.render('auth-forms-two', hbsObjectPin);
                res.render('auth-forms', hbsObjectPin);
            });
            break;
        case 'Published':
            db.Forms.findAll({
                where: {
                    publish: true
                }
            }).then(dbForms => {
                var hbsObjectPub = {
                    comment: dbForms
                };
                // console.log(res)
                // console.dir(hbsObjectPub)
                // dbForms.map(form=>console.log(form.firstName, form.lastName))
                res.render('auth-forms', hbsObjectPub);
            });
            break;
        case 'Unpublished':
            db.Forms.findAll({
                where: {
                    publish: false
                }
            }).then(dbForms => {
                var hbsObjectUnpub = {
                    comment: dbForms
                };
                // console.log("this is before Unpublished",)
                // console.dir(hbsObjectUnpub)
                // dbForms.map(form=>console.log(form.firstName, form.lastName))
                res.render('auth-forms', hbsObjectUnpub);
            });
            break;
        default:    
            console.log("default")
            db.Forms.findAll({
            }).then(dbForms => {
                var hbsObject = {
                    comment: dbForms
                };
                // console.log("this is before default all",)
                // console.dir("default:", hbsObject)
                // dbForms.map(form=>console.log(form.firstName, form.lastName))
                res.render('auth-forms', hbsObject);
                //res.json(dbForms);
            });
    }

}


//FORM GETS (UNAUTH)
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
    });
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