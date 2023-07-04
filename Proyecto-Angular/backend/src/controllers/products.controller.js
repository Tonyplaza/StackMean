const productCtrl = {}


const Product = require('../models/Product.js')

productCtrl.getProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products)
}

productCtrl.createProduct = async (req, res) => {
    const newProduct = new Product(req.body)
    
    await newProduct.save()

    res.send({message: 'Producto creado'})
}

productCtrl.getProduct = async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.json(product);
    };
    

productCtrl.editProduct = async (req, res) => {
await Product.findByIdAndUpdate(req.params.id, req.body)
res.json({status: 'Producto actualizado'})


}

productCtrl.deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
    res.json({status: 'Producto eliminado'})
}




module.exports = productCtrl;