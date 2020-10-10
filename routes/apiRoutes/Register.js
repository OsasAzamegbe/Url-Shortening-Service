const router = require('express').Router()

const User = require('../../models/User')
const {encryptPassword} = require('../../validationService/Password')


router.get('/', async (req, res) => {
    const body = req.body

    try{
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