const express = require("express")
const { product, getall, singleProduct, productName, deleteProduct, deleteproductname, update, updatebyID } = require("../Controller/control")


const router = express.Router()



//route to create new product
router.post("/createproduct",product)
//router to retrieve all product in the database
router.get("/allproducts",getall)
//router by retrieve product by ID 
router.get("/product/:id",singleProduct)
//router by retrieve product by  name
router.get("/searchproduct",productName)
//delete product by id 
router.delete("/deleteproduct/:id",deleteProduct)
//delete product by name
router.delete("/deleteproductname",deleteproductname)
//update by name
router.put("/update",update)
//update by ID
router.put("/updatebyid/:id",updatebyID)





module.exports = router