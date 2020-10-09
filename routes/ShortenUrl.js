const router = require('express').Router()

const {insertKey, getKey} = require('../keyGenService/KeyGen')



router.post('/', async (req, res) => {
    body = req.body

    try{
        const key = await insertKey(body.key)
        res.status(201).json({key})

    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
    }
    
})

router.get('/', async (req, res) => {

    try{
        const key = await getKey()
        res.json({key})

    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
    }
    
})

module.exports = router