const mongoose=require("mongoose")
const holdingschema = require("./holdingschema")

const holdings=mongoose.model("holding",holdingschema)
module.exports=holdings