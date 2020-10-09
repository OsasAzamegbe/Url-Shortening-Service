const router = require('express').Router()

const {insertKey} = require('../keyGenService/KeyGen')


router.post('/', async (req, res) => {
    const body = req.body

    try{
        const keys = body.keys
        await insertKey(keys)
        res.status(201).json({message: "keys inserted successfully!"})

    } catch (error) {
        res.status(400).json({message: "Bad Request"})
    }
})

module.exports = router