module.exports = app => {

    const application = require('./routes/application');
    const forms = require('./routes/forms');
    const product = require('./routes/product');
    const login = require('./routes/login');
    const signup = require('./routes/signup');

    app.use('/', application);
    app.use('/forms', forms);
    app.use('/product', product);
    app.use('/login', login);
    app.use('/signup', signup);
}