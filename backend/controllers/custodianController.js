const Hostel = require('../models/hostelModel')
const mongoose = require('mongoose')

//ge the hostel info
const getHostel = async (req, res) => {
    const custodianId = req.user._id

    const hostel = await Hostel.find({custodianId})

    if(!hostel){
        return res.status(404).json({error: error.message})
    }

    res.status(200).json(hostel)
}

module.exports = {
    getHostel
}