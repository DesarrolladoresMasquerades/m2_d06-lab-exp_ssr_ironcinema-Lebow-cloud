const express = require('express');
const router = express.Router();
const Movie = require("../models/movie.model")


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;



router.get("/movies/:id/details", (req, res, next)=>{
    const id = req.params.id

    Movie.findById(id)
    .then((movie)=>{
        res.render("details", movie)
    }).catch((err)=>console.log(err))
})




router.get("/movies", (req, res, next)=>{

    Movie.find()
    .then((movies)=>{
        res.render("movies", {movies})
    })
    .catch((error)=> console.log(error))
})


