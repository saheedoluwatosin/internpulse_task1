
const { Product } = require("../Model/product")
const mongoose = require("mongoose")


//create a new product
const product = async(request,response)=>{
    try {
        const { product_name , product_category} = request.body
        const already = await Product.findOne({product_name,product_category})
        if(already){
            return response.status(400).json({message:"product already exist. Kindly input a new product"})
        }

        const new_product = new Product({product_name,product_category})
        await new_product.save()
        return response.status(200).json({
            message:"Product successfully created",
            product:new_product
        })
    } catch (error) {
        return response.status(500).json({error : error.message})
    }
}


//Retrieve all the product
const getall = async (request,response)=>{
    try {
        const getall = await Product.find()
        return response.status(200).json({
            message:"Successful",
            getall
        })
    } catch (error) {
        return response.status(500).json({error:error.message})
    }
}

//retrieve a product by ID 
const singleProduct = async(request,response)=>{
    try {
        const{id}= request.params
    const singleP = await Product.findById(id)
    
    if(!singleP){
        return response.status(400).json({
            message:"Product not found"
        })
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send('Invalid ID format');
    }

    return response.status(200).json({
        singleP
    })
    } catch (error) {
        return response.status(500).json({
            error:error.message
        })
    }
    
}


//retrive a product by name 
const productName = async (request,response)=>{
    try {
        const {product_name}= request.query
        const productname = await Product.findOne({product_name})

        if (!productname){
            return response.status(404).json({message:"product not found"})
        }

        return response.status(200).json({
            message:"Successful",
            productname
        })

    } catch (error) {
        return response.status(500).json({error:error.message})
    }
    

}


//delete by ID
const deleteProduct = async (request,response)=>{
    try {
        const {id}= request.params
    const product = await Product.findByIdAndDelete(id)
    if(!product){
        return response.status(404).json({
            message:"Product not found"
        })
    }

    return response.status(200).json({
        message:"Product deleted successfully"
    })
    } catch (error) {
        return response.status(500).json({
            error:error.message
        })
    }
    
}


//delete by name
const deleteproductname = async(request,response)=>{
    try {
        const{product_name}= request.query
        const name = await Product.findOneAndDelete({product_name})
        if(!name){
            return response.status(400).json({message:"product not found"})
        }

        return response.status(200).json({
            message:"Product deleted Successfully"
        })

    } catch (error) {
        return response.status(500).json({error:error.message})
    }
    
}


//update by name 
const update = async(request,response)=>{
    try {
        const {new_name}=request.body
        const{product_name}= request.query
        const product = await Product.findOneAndUpdate({product_name},{product_name:new_name},{new: true})
        if(!product){
            return response.status(404).json({
                message:"product not found"
            })
        }

        return response.status(200).json({
            message:"Updated Successfully",
            product
        })
    } catch (error) {
        return response.status(500).json({error:error.message})
    }
    

}



//update by ID
const updatebyID = async(request,response)=>{
    try {
        const {id}= request.params
        const{new_name}= request.body
        const product = await Product.findByIdAndUpdate(id,{product_name:new_name},{new: true})
        if(!product){
            return response.status(404).json({
                message:"product not found"
            })
        }

        return response.status(200).json({
            message:"Updated Successfully",
            product
        })

    } catch (error) {
        return response.status(500).json({error:error.message})
    }
}




module.exports = {
    product,
    getall,
    singleProduct,
    productName,
    deleteProduct,
    deleteproductname,
    update,
    updatebyID
}