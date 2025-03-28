const mongoose=require("mongoose")
const schema=mongoose.Schema;
const watchlistschema=new schema({
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
})
module.exports=watchlistschema