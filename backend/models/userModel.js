const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hostelIncharge: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//static signup method
userSchema.statics.signup = async function (
  fName,
  lName,
  email,
  password,
  hostelIncharge
) {
  //validation
  if (!fName || !lName || !email || !password) {
    throw Error("All fields should be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Passsword is not strong enough");
  }

  //check if email exists
  const existsEmail = await this.findOne({ email });

  if (existsEmail) {
    throw Error("Email already exists");
  }

  //hash password
  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash(password, salt);

  //create user
  const user = await this.create({
    fName,
    lName,
    email,
    password: hash,
    hostelIncharge
  });

  return user;
};

//static login method
userSchema.statics.login = async function (username, password) {
  if (!username || !password) {
    throw Error("All fields should be filled");
  }

  var user = null;

  //allow a user to use either reg no or email
  if (validator.isEmail(username)) {
    user = await this.findOne({ email: username });
  } else {
    user = await this.findOne({ regNo: username });
  }

  if (!user) {
    throw Error("Incorrect Username");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
