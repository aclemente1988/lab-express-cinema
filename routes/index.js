const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => 
res.render('index'));

router.get('/movies', (req,res) => { 
    Movie.find()
    .then(foundMovies => res.render('movies',{objectMovies:foundMovies}))
    .catch(err => res.send(err));
})

router.get('/movies/:movieId', (req,res) => { 
    const { movieId } = req.params;
    Movie.findById(movieId)
    .then(foundMoviesID => res.render('movie-details.hbs',{idMovies:foundMoviesID}))
    .catch(err => res.send(err));
})

module.exports = router;
