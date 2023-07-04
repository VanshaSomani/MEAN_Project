const jwt = require("jsonwebtoken")
const { SEC_KEY } = process.env

module.exports = function(req,res,next){
    console.log("in the AuthMidd");
    jwt.verify(req.headers.token,SEC_KEY,function(err,decoded){
        if(err){
            console.log(err);
            res.json({msg:"Please login access the service",rcode:-9,data:""})
        }
        else{
            console.log("Decode = ",decoded);
            next();
        }
    })
}