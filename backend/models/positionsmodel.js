const mongoose=require("mongoose")
const positionschema = require("./positionschema")

const position=mongoose.model("position",positionschema)
module.exports=position