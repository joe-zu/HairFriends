module.exports = app => {

    const application = require('./routes/application');
    const product = require('./routes/product');
    // const trips = require('./routes/trips');
    // const pricing = require('./routes/pricing');

    app.use('/', application);
    app.use('/product', product);
    //app.use('/trips', trips);
    // app.use('/pricing', pricing);
//other routes..
}