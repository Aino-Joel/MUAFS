const express = require('express');
const router = express.Router();
const { createBooking } = require('../controllers/bookingController')

// Handle form submission
router.post('/create', createBooking);

module.exports = router;
