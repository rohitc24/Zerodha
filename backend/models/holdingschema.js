const mongoose=require("mongoose")
const schema=mongoose.Schema
const holdingschema=new schema({
    name: String,
      qty: Number,
      avg: Number,
      price: Number,
      net: String,
      day: String,
      isLoss:Boolean
})
module.exports=holdingschema;