const mongoose = require("mongoose")
require('dotenv').config()
const {MONGO_URI} = process.env
// console.log(process.env.MONGO_URI)
module.exports.getDbConnection = function(){
    mongoose.connect(MONGO_URI).then(()=>console.log("DbConnected")).catch(()=>console.log("DbCoonection Failed"))
}