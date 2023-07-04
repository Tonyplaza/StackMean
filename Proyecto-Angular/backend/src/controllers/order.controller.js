const ordersCtrl = {}


const Order = require('../models/orders.js')

ordersCtrl.getOrders = async (req, res) => {
    const orders = await Order.find()
    res.json(orders)
}

ordersCtrl.createOrder = async (req, res) => {
    const newOrder = new Order(req.body)
    
    await newOrder.save()

    res.send({message: 'Producto creado'})
}

ordersCtrl.getOrder = async (req, res, next) => {
    const { id } = req.params;
    const order = await Order.findById(id);
    res.json(order);
    };
    


ordersCtrl.editOrder = async (req, res) => {
await Order.findByIdAndUpdate(req.params.id, req.body)
res.json({status: 'La orden ah sido actualizada'})


}

ordersCtrl.deleteOrder = async (req, res) => {
    await Order.findByIdAndDelete(req.params.id)
    res.json({status: 'La orden ah sido eliminada'})
}




module.exports = ordersCtrl;