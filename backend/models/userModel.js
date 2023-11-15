const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    regNo: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

//static signup method
userSchema.statics.signup = async function(fName, lName, email, regNo, password) {

   //validation
    if(!fName || !lName || !email || !regNo || !password){
        throw Error('All fields should be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Passsword is not strong enough')
    }

    //check if email or regNo exists
    const existsEmail = await this.findOne({email})
    const existsRegNo = await this.findOne({regNo})

    if (existsEmail){
        throw Error('Email already exists')
    }
    if (existsRegNo){
        throw Error('User with Registration Number already exists')
    }

    //hash password
    const salt = await bcrypt.genSalt(10)

    const hash = await bcrypt.hash(password, salt)

    //create user
    const user = await this.create({ fName, lName, email, regNo, password: hash })

    return user
}

//static login method
userSchema.statics.login = async function(email, password){
    if(!email || !password){
        throw Error('All fields should be filled')
    }

    var user = null

//allow a user to user either reg no or email
    if(validator.isEmail(email)){
        user = await this.findOne({email})
    } else {
        user = await this.findOne({regNo: email})
    }
    
    if (!user){
        throw Error('Incorrect email or Registration Number')
    }

    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error('Incorrect password')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)