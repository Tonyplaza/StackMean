const { Router } = require('express')
const routerregister = Router()

const registerCtrl = require('../controllers/register.controller.js')


routerregister.get('/', registerCtrl.getRegisters);

routerregister.post('/', registerCtrl.createRegister);

routerregister.get('/:id', registerCtrl.getRegister);

routerregister.get('/username/:username', registerCtrl.getUserName);
routerregister.get('/password/:password', registerCtrl.getPassword);

routerregister.put('/:id', registerCtrl.editRegister);

routerregister.delete('/:id', registerCtrl.deleteRegister);

module.exports = routerregister