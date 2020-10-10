const router = require('express').Router()

const {insertKey} = require('../../keyGenService/KeyGen')
const {validateAddKeysBody} = require('../../validationService/RequestValidation')


router.post('/', async (req, res) => {
    const body = req.body

    //validate body
    const {error} = validateAddKeysBody(body)
    if (error) {
        return res.status(400).json({error: error.details[0].message})
    }

    try{
        const keys = body.keys
        await insertKey(keys)
        res.status(201).json({message: "keys inserted successfully!"})

    } catch (error) {
        res.status(400).json({error: "Bad Request"})
    }
})

module.exports = router