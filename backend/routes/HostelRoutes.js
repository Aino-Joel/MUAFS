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
router.get('/:id', (req, res) => {
    const {id} = req.params

    const hostel = Hostel.findById(id)

    if(!hostel){
        return res.status(404).json({error: error.message})
    }

    res.status(200).json(hostel)
})

module.exports = router