const mongoose = require('mongoose');
  //Creating schema
const movieSchema = new mongoose.Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    showtime: [String]
})

//Creating Model
const Movie = mongoose.model('Movie', movieSchema)

//Exporting Model
module.exports = Movie;











// const mongoose = require ("mongoose");
// const schemaMovies = new mongoose.Schema({
//     title: String,
//     director: String,
//     stars: [String],
//     image: String,
//     description: String,
//     showtimes: [String]
// })
// const Movie = mongoose.model ("Movie", schemaMovies);
// module.exports = Movie