const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const userRoutes = require('./routes/userRoutes')

const app = express()

// connect to mongoDB
// pulling the URI from .gitignore'd key.js. You can get your own key by signing up for a MongoDB Atlas account and setting up a DB/Cluster/Collection
const dbURI = require('../key.js')

mongoose.connect(dbURI)
  .then(() => {
    app.listen(3000)
  })
  .catch(err => console.error('Error: ', err))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

// routes

app.use('/users', userRoutes)