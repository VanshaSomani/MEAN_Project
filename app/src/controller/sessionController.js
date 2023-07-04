let users = []

function signup(req,res)
{
    let firstName = req.body.firstName  //firstName 
    let email  = req.body.email
    let password = req.body.password

    let user = {
        "firstName":firstName,
        "email":email,
        "password":password
    }

    users.push(user)

    res.json({"msg":"SignupDone","data":user,"rcode":200})

}

function getAllUsers(req,res){

    res.json({msg:"AllUserRET",rcode:200,data:users})
}
