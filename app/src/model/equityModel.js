const mongoose = require("mongoose")
const Schema = mongoose.Schema  


let EquitySchema  = new Schema({
    name: {
        type: String,
        required: { value: true, message: "Please Enter Equity Name" },
        lowercase: true       
    },
    symbol: {
        type: String,
        required: { value: true, message: "Please Enter Equity Symbol" },
        uppercase: true       
    },
    isin: {
        type: String,
        required: { value: true, message: "Please Enter isin" },
        lowercase: true       
    },
    industryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Industry"
    }

})

module.exports  = mongoose.model("Equity",EquitySchema)