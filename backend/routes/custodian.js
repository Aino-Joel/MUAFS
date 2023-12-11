const express = require('express')
const {
    getHostel,
} = require('../controllers/custodianController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

//GET hostel
router.get('/', getHostel)

module.exports = router