// const express = require('express');
// const Movie = require('../models/Movie.model');
// const router = express.Router();

// /* GET home page */
// router.get('/', (req, res, next) => {
//     Movie.find()
//     .then (movies => {
//         console.log(movies);
//         res.render('movies', {movies});
//     })
//     .catch(error => {console.log(error)})
// });

// router.get('/movies/:movieId', (req, res, next) => {
//   console.log('movie id:', movieId);

//   Movie.findById(movieId)
//   .then((movie) => {
//     console.log(movie);
//     res.render('details', {movie});
//   })
//   .catch((error) => {console.log(error)})
// });



// module.exports = router;






// const mongoose = require("mongoose");
//   const Movie = require("../models/Movie.model")
//   const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-cinema";
// mongoose
//   .connect(MONGO_URI)
//   .then((x) => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
//     return  Movie.insertMany(movies)
//   })
//   .catch((err) => {
//     console.error("Error connecting to mongo: ", err);
//   })
//  .finally(()=>{
//      console.log("DB Disconnected")
//      mongoose.connection.close()
//  })