const express = require('express')
const {
    getHostels,
    getHostel,
    createHostel
} = require('../controllers/hostelController')

const router = express.Router()

//GET all hostels
router.get('/', getHostels)

//GET single hostel
router.get('/:_id', getHostel)

//POST Hostel
router.post('/', createHostel)

module.exports = router