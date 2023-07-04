const mongoose = require("mongoose");
const { Schema } = mongoose;

const lineItemSchema = new Schema({

    orderId:{type: String, required:true},
    productId:{type: String, required:true},
    quantity:{type: Number, required:true}

},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("lineItem", lineItemSchema);