const lineItemCtrl = {}


const lineItem = require('../models/lineItem')

lineItemCtrl.getlineItems = async (req, res) => {
    const lineitems = await lineItem.find()
    res.json(lineitems)
}

lineItemCtrl.createlineItem = async (req, res) => {
    const newlineItem = new lineItem(req.body)
    
    await newlineItem.save()

    res.send({message: 'Línea de artículo creado'})
}

lineItemCtrl.getlineItem = async (req, res, next) => {
    const { id } = req.params;
    const lineitem = await lineItem.findById(id);
    res.json(lineitem);
    };

lineItemCtrl.editlineItem = async (req, res) => {
await lineItem.findByIdAndUpdate(req.params.id, req.body)
res.json({status: 'Línea de artículo actualizado'})


}

lineItemCtrl.deletelineItem = async (req, res) => {
    await lineItem.findByIdAndDelete(req.params.id)
    res.json({status: 'Línea de artículo eliminado'})
}




module.exports = lineItemCtrl;