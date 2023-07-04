const mongoose = require("mongoose")
const Schema = mongoose.Schema  


let IndustrySchema  = new Schema({
    name: {
        type: String,
        required: { value: true, message: "Please Enter Industry Name" },
        lowercase: true       
    }
})

module.exports  = mongoose.model("Industry",IndustrySchema)