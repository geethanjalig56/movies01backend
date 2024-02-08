const mongoose = require("mongoose")
const movieSchema = new mongoose.Schema(
    {
    title:String,
    year:String,
    director:String,
    genre:String
    }
)

module.exports = mongoose.model("movies",movieSchema)