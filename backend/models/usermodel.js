const mongoose=require("mongoose")
const userSchema=require("./userschema")
const user=mongoose.model("User", userSchema);
module.exports=user