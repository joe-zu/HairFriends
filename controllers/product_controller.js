const db = require('../models');

exports.index = (req, res) => {
    db.Products.findAll({}).then(dbProducts => {
        const hbsObj = {
            product: dbProducts
        }
        // console.log(hbsObj)
        res.render('products', hbsObj)
    })
}

exports.create = (req, res) => {
    db.Products.create({
        productName: req.body.productName,
        description: req.body.description,
        productLink: req.body.productLink
        //productLink: req.params.prodLink
    })
        .then(newProd => {
            res.json(newProd);
        })
}

exports.delete = (req, res) => {
    db.Products.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbDelete => {
        res.json(dbDelete)
    })
}
