const router = require('express').Router()
const jwt = require('jsonwebtoken')

const User = require('../models/User')
const {validatePassword} = require('../validationService/Password')
const {loginValidation} = require('../validationService/RequestValidation')


router.post('/', async (req, res) => {
    const body = req.body

    try {
        //Validate Login data
        const {error} = loginValidation(body)
        if (error) {
            return res.status(400).json({"validation error" : error.details[0].message})
        }

        //get user
        const user = await User.findOne({email: body.email})
        if (!user) {
            return res.status(400).json({error: "Email or Password is incorrect"})
        }

        //compare passwords
        const valid = await validatePassword(body.password, user.password)
        if (!valid) {
            return res.status(400).json({error: "Email or Password is incorrect"})
        }

        //create jwt
        const token = jwt.sign({_id: user._id}, process.env.JWT_TOKEN_SECRET)

        res.header("Authorization", token)
        return res.status(200).json({
            message: "Logged in succesfully",
            token
        })
        
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
    
})


module.exports = router