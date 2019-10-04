const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')

// const option = {
//     socketTimeoutMS: 30000,
//     keepAlive: true,
//     reconnectTries: 30000
// }

const app = express()

// DB config
const db = require('./config/key').MongoURI

// connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

// EJS Middleware
app.use(expressLayouts)
app.set('view engine', 'ejs')

// Bodyparser
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/', require('./routes/index.js'))
app.use('/users', require('./routes/users.js'))

// setup port
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}.`))
