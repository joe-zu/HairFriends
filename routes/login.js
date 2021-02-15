var express = require('express');
var router  = express.Router();

var passport = require("../config/passport");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
var login_controller = require('../controllers/login_controller');

router.get("/", login_controller.loginRender);

router.post("/", passport.authenticate("local"), login_controller.userLogin);

router.get("/logout", isAuthenticated, login_controller.userLogout)



module.exports = router;