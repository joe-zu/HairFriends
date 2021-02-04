const db = require('../models');

exports.index = (req, res) => {
    // db.Products.findAll({}).then(dbProducts => {
    //     res.json(dbProducts)
    // })
    res.render('products')
}

exports.products = (req, res) => {
    db.Products.findAll({}).then(dbProducts => {
        const hbsObj = {
            product: dbProducts
        }
        // console.log(hbsObj)
        res.render('products', hbsObj)
    })
}

exports.delete = (req, res) => {
    db.Products.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbDelete => {
        res.json(dbDelete);
    })
}

exports.create = (req, res) => {
    db.Products.create({
        productName: req.body.productName,
        description: req.body.description
        //productLink: req.params.prodLink
    })
        .then(newProd => {
            res.json(newProd);
        })
}

exports.update = (req, res) => {
    db.Products.update({
        productName: req.params.prodName,
        description: req.params.prodDesc
    },
        {
            where: {
                id: req.params.id
            }
        })
        .then(newProd => {
            res.json(newProd);
        })
}