const { Router } = require('express')
const routerproduct = Router()

const productCtrl = require('../controllers/products.controller.js')


routerproduct.get('/', productCtrl.getProducts);

routerproduct.post('/', productCtrl.createProduct);

routerproduct.get('/:id', productCtrl.getProduct);

routerproduct.put('/:id', productCtrl.editProduct);

routerproduct.delete('/:id', productCtrl.deleteProduct);

module.exports = routerproduct