const mongoose=require("mongoose")
const orderschema=require("./orderschema")
const order=mongoose.model("order",orderschema)
module.exports =order;