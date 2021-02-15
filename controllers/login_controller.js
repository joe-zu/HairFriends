var passport = require("../config/passport");

exports.loginRender = (req, res) => {
    
 // If the user already has an account send them to the members page

    // if (req.user) {
    // res.redirect("/");
    // }
    res.render('login');
}

exports.userLogin = (req, res) => {
    res.json(req.user);
}


exports.userLogout = (req, res) => {
    req.logout();
    res.redirect("/");
}