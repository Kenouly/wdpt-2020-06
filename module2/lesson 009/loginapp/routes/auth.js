
const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

router.get('/signup', (req, res, next) => {
    res.render('signup')
})

router.post('/signup', (req, res, next) => {
    const {username, password} = req.body

    bcrypt.hash(password, 10)
        .then(hashedPassword => {
            return User.create({
                username,
                password: hashedPassword
            })
        })
        .then( () => {
            res.send('user created')
        })
        .catch(e => {
            next(e)
        })

})

module.exports = router
