const mongoose = require("mongoose")


const product = mongoose.Schema({
    product_name: {type:String , required : true},
    product_category :{ type:String , required : true}
},
{
    timestamps : true
})


const Product = mongoose.model("product",product)


module.exports = {
    Product
}