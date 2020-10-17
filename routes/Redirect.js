const router = require('express').Router()
const UrlModel = require('../models/Url')


router.get('/:key', async (req, res) => {
    const key = req.params.key
    
    try{
        const urlObj = await UrlModel.findOne({key: key})
        const longUrl = urlObj.url

        res.redirect(307, longUrl)

    } catch (error) {
        res.status(404).json({message: 'Resource Not Found'})
    }
})

router.get('/', (req, res) => {
    res.send("Welcome to the home page")
})


module.exports = router