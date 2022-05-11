const router = require("express").Router()
const Comment = require('../models/Comment.model')
const Place = require('../models/Place.model')
const { isAuthenticated } = require('../middlewares/jwt.middleware');


//CREAR COMMENT


router.post('/create-comment', isAuthenticated, (req, res) => {
    const { rating, text } = req.body


    Comment
        .create({ rating, text })
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

router.delete('/:id/delete-comment', isAuthenticated, (req, res) => {
    const { id } = req.params


    Place
        .findByIdAndDelete(id)
        .then(response => res.json(response))
        .catch(err => console.log(err))

})










module.exports = router;