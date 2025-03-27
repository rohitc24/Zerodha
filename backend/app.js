require("dotenv").config()
const express=require("express")
const mongoose=require("mongoose")
const holdings=require("./models/holdingmodel")
const positions=require("./models/positionsmodel")
const order=require("./models/ordermodel")
const cors=require("cors")
const bodyparser=require("body-parser")

const app=express()
const port=process.env.port

const mongo_url=process.env.mongo_url


app.use(cors())
app.use(bodyparser.json())

app.listen(port,async(req,res)=>{
    console.log("Listening on 5000 port")
     await mongoose.connect(mongo_url)
    console.log("Db connected")
})
app.get("/holding",async(req,res)=>{
    let allholdings=await holdings.find({})
    res.json(allholdings)
})
app.get("/position",async(req,res)=>{
    let allpositions=await positions.find({})
    res.json(allpositions)
})

