const router = require("express").Router()
const Comment = require('../models/Comment.model')
const Place = require('../models/Place.model')
const { isAuthenticated } = require('../middlewares/jwt.middleware');
const User = require("../models/User.model");


//CREAR COMMENT

router.post('/:idPlace/create-comment', isAuthenticated, (req, res) => {
    const { rating, text } = req.body

    const { _id } = req.payload

    const { idPlace } = req.params

    Comment
        .create({ rating, text, place: idPlace, owner: _id })
        .then(response => res.json(response))
        .catch(err => console.log(err))

})

//EDIT COMMENT 

router.put('/:id/edit-comment', isAuthenticated, (req, res) => {
    const { id } = req.params
    const { rating, text } = req.body


    Comment
        .findByIdAndUpdate(id, { rating, text }, { new: true })
        .then(response => res.json(response))
        .catch(err => console.log(err))

})

//DELETE COMMENT 

router.delete('/:id/delete-comment', (req, res) => {
    const { id } = req.params


    Comment
        .findByIdAndDelete(id)
        .then(response => res.json(response))
        .catch(err => console.log(err))

})

// GET ALL COMMENTS FOR THIS RESTAURANT

router.get('/all-comments', (req, res) => {
    const { rating, text } = req.body


    Comment
        .find()
        .then(response => res.json(response))
        .catch(err => console.log(err))

})


router.get('/:place/commentsByPlace', isAuthenticated, (req, res) => {
    const { place } = req.params
    const { _id } = req.payload

    Comment
        .find({ place: place, owner: _id })
        .then(response => res.json(response))
        .catch(err => console.log(err))

})







module.exports = router;