const customerCtrl = {}


const Customer = require('../models/customers.js')

customerCtrl.getCustomers = async (req, res) => {
    const customers = await Customer.find()
    res.json(customers)
}

customerCtrl.createCustomer = async (req, res) => {
    const newCustomer = new Customer(req.body)
    
    await newCustomer.save()

    res.send({message: 'Cliente creado'})
}

customerCtrl.getCustomer = async (req, res, next) => {
    const { id } = req.params;
    const customer = await Customer.findById(id);
    res.json(customer);
    };

customerCtrl.editCustomer = async (req, res) => {
await Customer.findByIdAndUpdate(req.params.id, req.body)
res.json({status: 'Cliente actualizado'})


}

customerCtrl.deleteCustomer = async (req, res) => {
    await Customer.findByIdAndDelete(req.params.id)
    res.json({status: 'Cliente eliminado'})
}




module.exports = customerCtrl;