const db = require('../models');

exports.index = (req, res) => {
    db.Forms.findAll({
        where: {
            CategoriesId: req.params.id
        }
    }).then(dbForms => {
        console.log(dbForms)
    })
}