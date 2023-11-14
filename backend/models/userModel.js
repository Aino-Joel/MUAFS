const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    regNo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

//static signup method
userSchema.statics.signup = async function(email, regNo, password) {

   //validation
    if(!email || !regNo || !password){
        throw Error('All fields should be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Passsword is not strong enough')
    }

    const exists = await this.findOne({email})

    if (exists){
        throw Error('Email already exists')
    }

    //hash password
    const salt = await bcrypt.genSalt(10)

    const hash = await bcrypt.hash(password, salt)

    //create user
    const user = await this.create({ email, regNo, password: hash })

    return user
}

module.exports = mongoose.model('User', userSchema)