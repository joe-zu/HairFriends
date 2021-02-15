var express = require('express');
var router  = express.Router();

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
var signup_controller = require('../controllers/signup_controller');

router.get("/", signup_controller.signupRender);
router.post("/", signup_controller.newSignup);





module.exports = router;