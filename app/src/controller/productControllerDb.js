const ProductModel = require("../model/productModel")

module.exports.addProduct = function (req, res) {

    console.log(req.body);

    let productName = req.body.productName
    let price = req.body.price
    let qty = req.body.qty
    let categoryId = req.body.categoryId 
    
    let product = new ProductModel({
        "productName": productName,
        "price": price,
        "qty": qty,
        "categoryId":categoryId 
    });

    product.save();

    res.json({ "msg": "Product Added", "data": product, "rcode": 200 })
}

module.exports.getAllProducts = function (req, res) {
         ProductModel.find().populate("categoryId").exec().then((data) => {
            res.json({ "msg": "Product list", "data": data, "rcode": 200 })
        }).catch((err) => {
            console.log(err);
            res.json({ "msg": "SMW", "rcode": -9, "data": err })
        })
     
}

//getprodcut/1 
module.exports.getProductById = function (req, res) {
    let productId = req.params.productId
    ProductModel.findById({ _id: productId }).then((data) => {
        res.json({ "msg": "Product Ret", "data": data, "rcode": 200 })
    }).catch((err) => {
        res.json({ "msg": "SMW", "rcode": -9, "data": err })
    })
}

//deletebyid 
module.exports.deleteProductById = function (req, res) {
    let productId = req.params.productId

    ProductModel.findByIdAndDelete({ _id: productId }).then((data) => {
        res.json({ "msg": "Product Deleted", "data": data, "rcode": 200 })
    }).catch((err) => {
        res.json({ "msg": "SMW", "rcode": -9, "data": err })
    })
}


module.exports.filterProducts = function (req, res) {
    let minPrice = req.body.minPrice
    let maxPrice = req.body.maxPrice

    ProductModel.find({
        $and: [
            {
                price: {
                    $gt: minPrice
                }
            },
            {
                price: {
                    $lt: maxPrice
                }
            }
        ]

    }).then((data) => {
        if (data.length == 0) {
            res.json({ "msg": "No Data Found ", "data": req.body, "rcode": -9 })
        } else {
            res.json({ "msg": "Product filter ", "data": data, "rcode": 200 })
        }
    }).catch((err) => {
        res.json({ "msg": "SMW ", "data": err, "rcode": -9 })
    })
}



//name price qty 

module.exports.updateProduct = function(req,res){
    let productId = req.body.productId 
    let price = req.body.price  
    let qty = req.body.qty 

    ProductModel.updateOne({_id:productId},{"price":price,"qty":qty}).then((data)=>{
        res.json({"msg":"product updated","data":data,"rcode":200})
    }).catch((err)=>{
        res.json({"msg":"product updation fails","data":data,"rcode":200})      
    })
}
