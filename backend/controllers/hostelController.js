const Hostel = require('../models/hostelModel')
const mongoose = require('mongoose')

const getHostels = async (req, res) => {
    const hostels = await Hostel.find()

    res.status(200).json(hostels)
}

const getHostel = async (req, res) => {
    const {_id} = req.params

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).json({error: "No such Hostel"})
    }

    const hostel = await Hostel.findById(_id)

    if(!hostel){
        return res.status(404).json({error: error.message})
    }

    res.status(200).json(hostel)
}

//create new Hostel
const createHostel = async (req,res) => {
    const {name, location, custodian, rooms} = req.body

    let emptyFields = []

    if(!name){
        emptyFields.push('name')
    }
    if(!location){
        emptyFields.push('location')
    }
    if(!custodian){
        emptyFields.push('custodian')
    }
    if(!rooms){
        emptyFields.push('rooms')
    }
    if(emptyFields.length>0){
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields})
    }

    //add doc to db
    try {
        // const user_id = req.user._id
        const hostel = await Hostel.create({name, location, custodian, rooms})
        res.status(200).json(hostel)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getHostels,
    getHostel,
    createHostel
}