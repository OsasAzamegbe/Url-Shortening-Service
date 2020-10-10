const router = require('express').Router()

const User = require('../../models/User')


router.get('/', async (req, res) => {
    const body = req.body

    try{
        const user = new User({
            username: body.username,
            email: body.email,
            password: body.password
        })

        await user.save((error) => {
            if (error) console.log(error)
        })

        res.status(201).json({url})

    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
})


module.exports = router