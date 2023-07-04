const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({

    productId:{type: String, required:true},
    productDescription:{type: String, required:true},
    price:{type: Number, required:true}

},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("Product", productSchema);