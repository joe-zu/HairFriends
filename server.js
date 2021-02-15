
const express = require('express');
const path = require('path');
var session = require("express-session");
var passport = require("./config/passport");

//Move this later to bin
const PORT = process.env.PORT || 8080;
// instantiate our app

const db = require("./models");
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

//set up handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({ secret: "alfredo does not climb", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


require('./routes')(app);


db.sequelize.sync().then(() => {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
