const router = require('express').Router()

const {insertKey} = require('../keyGenService/KeyGen')


router.post('/', async (req, res) => {
    body = req.body

    body.keys.forEach(keyObj => {

        try{
            const key = keyObj.key
            const insertedKey = await insertKey(key)
            res.status(201).json({insertedKey})
    
        } catch (error) {
            res.status(400).json({message: "Bad Request"})
        }
    });
})

module.exports = router