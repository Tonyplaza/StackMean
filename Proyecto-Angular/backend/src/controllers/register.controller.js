const registerCtrl = {}


const Register = require('../models/register.js')

registerCtrl.getRegisters = async (req, res) => {
    const registers = await Register.find()
    res.json(registers)
}

registerCtrl.createRegister = async (req, res) => {
    const newRegister = new Register(req.body)
    
    await newRegister.save()

    res.send({message: 'Registro creado con éxito!'})
}

registerCtrl.getRegister = async (req, res, next) => {
    const { id } = req.params;
    const register = await Register.findById(id);
    res.json(register);
    };
registerCtrl.getUserName= async (req, res, next) => {
  const { username } = req.params;
  const register = await Register.find({username: username}, {username:1, _id:0});
  res.json(register);
};

registerCtrl.getPassword = async (req, res, next) => {
  const { password } = req.params;
  const register = await Register.find({password:password}, {password:1, _id:0});
  res.json(register);
};

registerCtrl.editRegister = async (req, res) => {
await Register.findByIdAndUpdate(req.params.id, req.body)
res.json({status: 'Registro actualizado'})


}

registerCtrl.deleteRegister = async (req, res) => {
    await Register.findByIdAndDelete(req.params.id)
    res.json({status: 'Registro eliminado'})
}




module.exports = registerCtrl;