

module.exports = function (app) {

    const customers = [
        {
            id: 1,
            name: "mj"
        },
        {
            id: 2,
            name: "sv"
        },
        {
            id: 4,
            name: "sv"
        }
    ]

    app.get('/', (req, res) => {
        res.send('Hello world')
    })
    // Create a new Customer
    //  app.post('/api/customers', customers.create);

    // Retrieve all Customer
    app.get('/api/customers', (req, res) => {
        res.send(customers)
    });

    // create new customer data
    app.post('/api/customers', (req, res) => {
        // res.send([1, 2])
        const customer = {
            id: "" + Math.random() * 10,
            name: req.body.name
        }
       customers.push(customer)
        res.send(customer)
    });

    // delete new customer data
    app.delete('/api/customers/:id', (req, res) => {
        // res.send([1, 2])
       console.log(JSON.stringify(req.params.id));
        const customer = customers.find(c => c.id === parseInt(req.params.id));
        console.log(customer)
         if(!customer) res.status(404).send('data not found');
         const index = customers.indexOf(customer);
        // // customers.push(customer)
         customers.splice(index, 1)
       //  var x = req.param.id
        res.send(customers);
    });


}