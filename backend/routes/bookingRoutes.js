const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Handle form submission
router.post('/book-room', bookingController.bookRoom);

module.exports = router;
