const { Router } = require('express')
const routerorders = Router()

const ordersCtrl = require('../controllers/order.controller.js')


routerorders.get('/', ordersCtrl.getOrders);

routerorders.post('/', ordersCtrl.createOrder);

routerorders.get('/:id', ordersCtrl.getOrder);

routerorders.put('/:id', ordersCtrl.editOrder);

routerorders.delete('/:id', ordersCtrl.deleteOrder);

module.exports = routerorders