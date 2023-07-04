const CategoryModel  = require("../model/categoryModel")

module.exports.addCategory = function(req,res){
    let category =new CategoryModel({
        categoryName:req.body.categoryName
    })

    category.save().then((data)=>{
        res.json({"msg":"Category Save ","data":data,"rcode":200})  
    }).catch((err=>{
        res.json({"msg":"SMW ","data":err,"rcode":-9})  
    }))
}

module.exports.getAllCategory = function(req,res){
    CategoryModel.find().then((data)=>{
        res.json({"msg":"categories retrived ..","data":data,"rcode":200})
    }).catch((err)=>{

    })
}