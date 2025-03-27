const mongoose=require("mongoose")
const schema=mongoose.Schema
const positionschema=new schema({
    product:String,
    name: String,
      qty: Number,
      avg: Number,
      price: Number,
      net: String,
      day: String,
      
})
module.exports=positionschema;