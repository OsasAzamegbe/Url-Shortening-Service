const router = require('express').Router()

const User = require('../../models/User')
const {encryptPassword} = require('../../validationService/Password')
const {registerValidation} = require('../../validationService/RequestValidation')


router.post('/', async (req, res) => {
    const body = req.body

    try{
        //Validate Login data
        const {error} = registerValidation(body)
        if (error) {
            return res.status(400).json({"validation error" : error.details[0].message})
        }

        const encryptedPassword = await encryptPassword(body.password)
        const user = new User({
            username: body.username,
            email: body.email,
            password: encryptedPassword
        })

        const newUser = await user.save((error) => {
            if (error) console.log(error)
        })

        res.status(201).json({
            userCreated: true,
            newUserId: newUser._id
        })

    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
})


module.exports = router