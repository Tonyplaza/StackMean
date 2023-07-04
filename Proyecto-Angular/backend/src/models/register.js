const mongoose = require("mongoose");
const { Schema } = mongoose;

const registerSchema = new Schema({

    name:{type: String, required:true},
    username:{type: String, required:true},
    password:{type: String, required:true}

},{
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model("Register", registerSchema);