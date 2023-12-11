const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  phoneContact: {
    type: String,
    required: [true, "Enter phone contact"],
    minlength: [10, "Enter valid phoneContact e.g 0782345678"],
    maxlength: [10, "Enter valid phoneContact e.g 0782345678"],
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  roomType: {
    type: String,
    required: true,
  },
  roomSpec: {
    type: String,
    required: true,
  },
  hostelId: {
    type: mongoose.Types.ObjectId,
    required: true
  }
});

const BookingModel = mongoose.model('Booking', bookingSchema);

module.exports = BookingModel;
