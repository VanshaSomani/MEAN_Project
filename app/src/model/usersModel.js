const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        toLowerCase:true
    },
    password:{
        type:String,
        required:true
    },
    token:{
        type:String
    }
})

module.exports = mongoose.model("User",UserSchema)