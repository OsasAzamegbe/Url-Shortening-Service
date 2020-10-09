const router = require('express').Router()

const {insertKey, getKey} = require('../keyGenService/KeyGen')



router.post('/', async (req, res) => {
    body = req.body
    const key = await insertKey(body.key)
    res.json({key})
})

router.get('/', async (req, res) => {
    const key = await getKey()
    res.json({key})
})

module.exports = router