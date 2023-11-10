const express = require('express')
const Hostel = require('../models/HostelModel.js')
const mongoose = require('mongoose')

const router = express.Router()

//GET all hostels
router.get('/', (req, res) => {
    const hostels = Hostel.find()

    res.status(200).json(hostels)
})

//GET single hostel


module.exports = router