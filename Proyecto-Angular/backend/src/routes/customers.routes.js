const { Router } = require('express')
const routercustomer = Router()

const customerCtrl = require('../controllers/customers.controller.js')


routercustomer.get('/', customerCtrl.getCustomers);

routercustomer.post('/', customerCtrl.createCustomer);

routercustomer.get('/:id', customerCtrl.getCustomer);

routercustomer.put('/:id', customerCtrl.editCustomer);

routercustomer.delete('/:id', customerCtrl.deleteCustomer);

module.exports = routercustomer