const User = require('../models/userModel')

//login user

//signup user
const signupUser = async(req, res) => {
    const { email, regNo, password } = req.body

    try{
        const user = await User.signup(email, regNo, password)

        res.status(200).json({user})
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = { signupUser }