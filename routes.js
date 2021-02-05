module.exports = app => {

    const application = require('./routes/application');
    const forms = require('./routes/forms');
    const product = require('./routes/product');

    app.use('/', application);
    app.use('/forms', forms);
    app.use('/product', product);
    
}