var db = require("../models");
var passport = require("../config/passport");

exports.signupRender = (req, res) => {
    
 // If the user already has an account send them to the members page

    // if (req.user) {
    // res.redirect("/");
    // }
    res.render('signup');
}

exports.newSignup = (req, res) => {
    db.User.create({
        email: req.body.email,
        password: req.body.password
    })
        .then(function () {
            res.redirect(307, "/login");
        })
        .catch(function (err) {
            res.status(401).json(err);
        });
}