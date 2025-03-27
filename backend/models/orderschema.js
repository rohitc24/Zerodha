const mongoose=require("mongoose")
const schema=mongoose.Schema
const orderschema=new schema({
    name:String,
    qty: Number,
    price: Number,
    mode: String,
})

module.exports= orderschema;