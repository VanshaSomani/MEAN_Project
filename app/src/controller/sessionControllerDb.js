const UserModel = require("../model/usersModel")
const jwt = require("jsonwebtoken")
const {SEC_KEY} = process.env

module.exports.signup =  async function(req,res){
    let user = new UserModel(req.body) 

   let data = await user.save() 

   res.json({data:data,msg:"signup done",rcode:200})
}

module.exports.login = async function(req,res){
    
    let email = req.body.email 
    let password = req.body.password 

    let user = await UserModel.findOne({email:email})
    
    if(user && user.password == password){
             token = jwt.sign({"email":user.email,"userId":user._id,"role":user},SEC_KEY)
             console.log("Token - "+token)
             res.json({data:user,msg:"Login done",rcode:200,token:token})
    }else{      
            res.json({data:req.body,msg:"Invalid Credentials",rcode:-9})
    } 
}

