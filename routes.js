module.exports = app => {

    const application = require('./routes/application');

    const forms = require('./routes/forms');
    const product = require('./routes/product');

    

    // const trips = require('./routes/trips');
    // const pricing = require('./routes/pricing');

    app.use('/', application);

    app.use('/forms', forms);
    app.use('/product', product);
    
    // app.use('/pricing', pricing);
//other routes..
}