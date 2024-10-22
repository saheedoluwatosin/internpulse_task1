const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const cors = require("cors")
const router = require("./Router/router")



const app = express()

app.use(express.json())
app.use(cors())


mongoose.connect(`${process.env.MONGO_DB}`)
        .then(()=> {
            console.log("Mongodb Connected.....")
        })


const PORT = process.env.PORT || 5000


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})

app.use("/api",router)



app.use((request,response)=>{
    return response.status(400).json({
        message:"This endpoint doesnt exist"
    })
})