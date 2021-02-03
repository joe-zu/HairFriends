const db = require('../models');

exports.index = (req, res) => {

    db.Forms.findAll({
    }).then(dbForms => {
        res.json(dbForms)
    })
}
exports.createForm = (req, res) => {
    db.Forms.create({
        firstName: req.params.firstname,
        lastName: req.params.lastname,
        body: req.params.body,
        CategoryId: req.params.id
    }
    ).then(dbPost => {
        res.json(dbPost);
        console.log(dbPost);
    });
}
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
exports.delete = (req, res) => {
    db.Forms.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbForms => {
        res.json(dbForms)
    });
}