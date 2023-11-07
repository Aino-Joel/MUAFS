const express = require('express')
const mongoose = require('mongoose')

//express app
const app = express()

//routes

//connect to db
mongoose.connect('mongodb+srv://ainojoe77:kiHUDCF1gmY7Heff@muafs-data.mon47am.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        //listen for requests
        app.listen(4000, () => {
        console.log('connected to db & listening on port 4000')
    })
    })
    .catch((error) => {
        console.log(error)
    })