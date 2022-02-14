

const mongoose = require("mongoose")
const {Schema, model} = mongoose

const movieSchema = new Schema({
    title: {type: String},
    director : {type: String},
    stars : [String],
    image: {type : String},
    description: {type: String},
    showtimes: [String]
})

const Movie = mongoose.model("Movie", movieSchema)
module.exports = Movie