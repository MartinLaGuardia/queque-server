const { Router } = require('express');
const res = require('express/lib/response');
const { isAuthenticated } = require('../middlewares/jwt.middleware');
const Place = require('../models/Place.model');
const User = require('../models/User.model');
const router = require("express").Router()


//RANDOM PLACES
router.get('/random-places', (req, res) => {

    Place
        .find()
        .then(arrayDePlaces => {

            const threeRandomPlaces = []

            for (let i = 0; threeRandomPlaces.length < 3; i++) {

                let oneRandom = arrayDePlaces[Math.floor(Math.random() * arrayDePlaces.length)]

                if (threeRandomPlaces.indexOf(oneRandom) === -1) {
                    threeRandomPlaces.push(oneRandom)
                }

            }

            return res.json(threeRandomPlaces)

        })
        .catch(err => console.log(err))
})


//CREAR PLACES

router.post('/create-place', (req, res) => {
    const { owner, name, street, number, city, zipCode, latitude, longitude, phone, imageURL, foodstyle, description } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Place
        .create({ owner, name, address: { street, number, city, zipCode, location }, phone, imageURL, foodstyle, description })
        .then(response => res.json(response))
        .catch(err => console.log(err))

})

//PLACE DETAILS

router.get('/detail-place/:id', (req, res) => {
    const { id } = req.params

    Place
        .findById(id)
        .then(response => res.json(response))
        .catch(err => console.log(err))


})

//EDIT PLACES

router.put('/:id/edit-place', (req, res) => {
    const { id } = req.params
    const { owner, name, street, number, city, zipCode, longitude, latitude, phone, imageURL, foodstyle, description } = req.body

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    Place
        .findByIdAndUpdate(id, { owner, name, address: { street, number, city, zipCode, location }, phone, imageURL, foodstyle, description })
        .then(response => res.json(response))
        .catch(err => console.log(err))

})


//BORRAR PLACES

router.delete('/:id/delete-place', (req, res) => {
    const { id } = req.params

    Place
        .findByIdAndDelete(id)
        .then(response => res.json(response))
        .catch(err => console.log(err))


})

//CREAR PLACES FAVORITOS

router.put('/:id/save-fav-place', isAuthenticated, (req, res) => {

    const { id } = req.params
    const userId = req.payload


    User
        .findByIdAndUpdate(userId, { $addToSet: { favPlaces: id } }, { new: true })
        .then(response => res.json(response))
        .catch(err => console.log(err))
});


//ELIMINAR PLACES FAVORITOS

router.put('/:id/delete-fav-place', isAuthenticated, (req, res) => {

    const { id } = req.params
    const userId = req.payload

    User
        .findByIdAndUpdate(userId, { $pull: { favPlaces: id } }, { new: true })
        .then(response => res.json(response))
        .catch(err => console.log(err))

});



module.exports = router;
