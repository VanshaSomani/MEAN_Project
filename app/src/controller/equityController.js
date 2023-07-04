const EquityModel = require("../model/equityModel")
const CsvReaderService  = require("../services/csvreader")



module.exports.uploadEquity = async function(req,res){

    let allEquity = await CsvReaderService.uploadEquity()
 

    EquityModel.insertMany(allEquity).then(data=>{
        res.json({msg:"Equity uploaded",data:data,"status":200})
    })

}

module.exports.getAllEquity = function(req,res){
    EquityModel.find().populate("industryId").exec().then(data=>{
        res.status(200).json({msg:"Equity Reterived",data:data})
    }).catch(err=>{
        res.status(302).json({msg:"SMW",data:err})
    })
}