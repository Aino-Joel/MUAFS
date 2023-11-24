// Import necessary modules
const express = require('express');
const router = express.Router();
const BookingModel = require('../models/BookingModel');

// Route to handle form submission
router.post('/book-room', async (req, res) => {
  try {
    // Create a new booking instance with data from the request body
    const newBooking = new BookingModel(req.body);

    // Save the new booking to the database
    const savedBooking = await newBooking.save();

    // Respond with the saved booking details
    res.status(201).json(savedBooking);
  } catch (error) {
    // Handle errors, respond with an error status and message
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Export the router
module.exports = router;
