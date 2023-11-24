// Import necessary modules
const mongoose = require('mongoose')
const Booking = require('../models/BookingModel');

// Route to handle form submission
const bookRoom = async (req, res) => {
  const {name, email, checkInDate} = req.body

  let emptyFields = []

  if(!name){
      emptyFields.push('name')
  }
  if(!email){
      emptyFields.push('email')
  }
  if(!checkInDate){
      emptyFields.push('checkInDate')
  }
  if(emptyFields.length>0){
    return res.status(400).json({ error: 'Please fill in all fields', emptyFields})
}

  try {

    // Save the new booking to the database
    const savedBooking = await Booking.create({name, email, checkInDate})

    // Respond with the saved booking details
    res.status(201).json(savedBooking);
  } catch (error) {
    // Handle errors, respond with an error status and message
    res.status(500).json({error: error.message});
  }
};

// Export the router
module.exports = bookRoom;
