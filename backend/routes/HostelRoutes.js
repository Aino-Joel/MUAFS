const express = require('express')
const {
    getHostels,
    getHostel
} = require('../controllers/hostelController')

const router = express.Router()

//GET all hostels
router.get('/', getHostels)

//GET single hostel
router.get('/:id', getHostel)

module.exports = router