module.exports = function(app) {
 
   // var customers = require('../controllers/customer.controller.js');
 
   app.get('/', (req, res) => {
    res.send('Hello world')
})
    // Create a new Customer
  //  app.post('/api/customers', customers.create);
 
    // Retrieve all Customer
    app.get('/api/customers', (req, res) => {
        res.send([1, 2])
    });
 
   
 
   
}