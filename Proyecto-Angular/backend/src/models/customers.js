const mongoose = require("mongoose");
const { Schema } = mongoose;

const customerSchema = new Schema({

    customerId:{type: String, required:true},
    name:{type: String, required:true},
    email:{type: String, required:true},
    address:{type: String, required:true}

},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("Customer", customerSchema);