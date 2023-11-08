const mongoose = require('mongoose')

const Schema = mongoose.Schema

const hostelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    custodian: {
        type: String,
        required: true
    },
    rooms: {
        type: Number,
        required: true
    }
})
