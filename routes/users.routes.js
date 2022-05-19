const router = require("express").Router()
const User = require('../models/User.model')
const Place = require('../models/Place.model')
const { isAuthenticated } = require('../middlewares/jwt.middleware');



//USER DETAILS

router.get('/profile-user', isAuthenticated, (req, res) => {
    const { _id } = req.payload

    User
        .findById(_id)
        .populate('favPlaces')
        .then(response => res.json(response))
        .catch(err => console.log(err))


})


//EDIT USER 

router.put('/:id/edit-user', isAuthenticated, (req, res) => {
    const { id } = req.params
    const { imageURL, username, email, role, password, favPlaces } = req.body


    User
        .findByIdAndUpdate(id, { imageURL, username, email, role, password, favPlaces }, { new: true })
        .then(response => res.json(response))
        .catch(err => console.log(err))

})

//DELETE USER 

router.delete('/:id/delete-user', isAuthenticated, (req, res) => {
    const { id } = req.params


    User
        .findByIdAndDelete(id)
        .then(response => res.json(response))
        .catch(err => console.log(err))

})




module.exports = router;