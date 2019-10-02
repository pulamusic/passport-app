const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

// User model
const User = require('../models/User')

// Login Page
router.get('/login', (req, res) => res.render('login'))

// Register Page
router.get('/register', (req, res) => res.render('register'))

// Register handle
router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body
  let errors = []

  // check required fields
  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please fill in all fields.' })
  }

  // Check passwords match
  if (password !== password2) {
    errors.push({ msg: 'Passwords do not match.' })
  }

  // Check password length
  if (password.length < 6) {
    errors.push({ msg: 'Passwords must have six characters or more.' })
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    })
  } else {
    // validation passed
    User.findOne({ email: email })
      .then(user => {
        if (user) {
          // User exists
          errors.push({ msg: 'Email is already registered' })
          res.render('register', {
            errors,
            name,
            email,
            password,
            password2
          })
        } else {
          const newUser = new User({
            name,
            email,
            password
          })

          console.log(newUser)
          res.send('Hello')
        }
      })
  }
})

module.exports = router
