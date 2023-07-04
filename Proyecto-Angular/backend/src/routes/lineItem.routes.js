const { Router } = require('express')
const routerlineItem = Router()

const lineItemCtrl = require('../controllers/lineItems.controller.js')


routerlineItem.get('/', lineItemCtrl.getlineItems);

routerlineItem.post('/', lineItemCtrl.createlineItem);

routerlineItem.get('/:id', lineItemCtrl.getlineItem);

routerlineItem.put('/:id', lineItemCtrl.editlineItem);

routerlineItem.delete('/:id', lineItemCtrl.deletelineItem);

module.exports = routerlineItem