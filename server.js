const express = require("express")
require("./app/src/config/dbConfig").getDbConnection()

const categoryRoutes = require("./app/src/routes/category.routes")
const productRoutes = require("./app/src/routes/product.routes")
const publicRoutes = require("./app/src/routes/public.routes")
const authMiddlerware = require("./app/src/middleware/auth.middleware")
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
 
app.use("/admin",authMiddlerware,categoryRoutes)
app.use("/admin",authMiddlerware,productRoutes)

app.use("/public",publicRoutes)


app.listen(9999)
console.log("server started 9999");