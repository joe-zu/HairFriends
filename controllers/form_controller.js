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
                var hbsObject = {
                    comment: dbForms
                };
                console.dir(hbsObject)
                res.render('auth-forms', hbsObject);
            });
            break;
        case 'Published':
            db.Forms.findAll({
                where: {
                    publish: true
                }
            }).then(dbForms => {
                var hbsObject = {
                    comment: dbForms
                };
                console.dir(hbsObject)
                res.render('auth-forms', hbsObject);
            });
            break;
        case 'Unpublished':
            db.Forms.findAll({
                where: {
                    publish: false
                }
            }).then(dbForms => {
                var hbsObject = {
                    comment: dbForms
                };
                console.dir(hbsObject)
                res.render('auth-forms', hbsObject);
            });
            break;
        default:    
            db.Forms.findAll({
            }).then(dbForms => {
                var hbsObject = {
                    comment: dbForms
                };
                console.dir(hbsObject)
                res.render('auth-forms', hbsObject);
                //res.json(dbForms);
            });
    }

}
//ALL PINNED
// exports.authAllPin = (req, res) => {
//     db.Forms.findAll({
//         where: {
//             pin: true
//         }
//     }).then(dbForms => {
//         var hbsObject = {
//             comment: dbForms
//           };
//           res.render('auth-forms', hbsObject);
//     });
// }
//ALL PUBLISHED
// exports.authAllPub = (req, res) => {
//     db.Forms.findAll({
//         where: {
//             publish: true
//         }
//     }).then(dbForms => {
//         var hbsObject = {
//             comment: dbForms
//           };
//           res.render('auth-forms', hbsObject);
//     });
// }
//ALL UNPUBLISHED
// exports.authAllUnpub = (req, res) => {
//     db.Forms.findAll({
//         where: {
//             publish: false
//         }
//     }).then(dbForms => {
//         var hbsObject = {
//             comment: dbForms
//           };
//           res.render('auth-forms', hbsObject);
//     });
// }






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