const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const hostelSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    custodian: {
      type: String,
      required: true,
    },
    custodianNo: {
      type: String,
      required: true,
    },
    custodianId: {
      type: String,
      unique: true,
      required: true,
    },
    rooms: {
      type: Number,
      required: true,
    },
    // amenities: {
    //   type: [String],
    //   required: true
    // },
    // roomType: {
    //     type: [String],
    //     required: true,
    //   },
    // price: {
    //     type: [Number],
    //     required: true,
    //   },
    // numberOfRoomsAvailable: [
    //   {
    //     type: Number,
    //     required: true,
    //   },
    // ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hostel", hostelSchema);
