const mongoose=require("mongoose")
const watchlistschema = require("./watchlistschema")
const watchlist=mongoose.model("watchlist",watchlistschema)
module.exports=watchlist