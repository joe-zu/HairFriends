const db = require('../models');

exports.index = (req, res) => {
    db.Products.findAll({}).then(dbProducts => {
        res.json(dbProducts)
    })
    }

exports.delete = (req, res) => {
    db.Products.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbDelete => {
        res.render(dbDelete); 
    })
}

exports.create = (req, res) => {
    db.Products.create({
        where: {
            id: req.body.id
        }
    }).then(dbCreate => {
        res.json(dbCreate);
    })
}