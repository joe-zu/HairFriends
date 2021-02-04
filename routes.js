module.exports = app => {

    const application = require('./routes/application');

    const forms = require('./routes/forms');
    const product = require('./routes/product');

<<<<<<< HEAD
=======
    

>>>>>>> a051455c3ed68b10fa784d60ef80b34752a3d558
    // const trips = require('./routes/trips');
    // const pricing = require('./routes/pricing');

    app.use('/', application);

    app.use('/forms', forms);
    app.use('/product', product);
<<<<<<< HEAD

=======
    
>>>>>>> a051455c3ed68b10fa784d60ef80b34752a3d558
    // app.use('/pricing', pricing);
//other routes..
}