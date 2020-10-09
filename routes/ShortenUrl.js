const router = require('express').Router()

const {insertKey, getKey} = require('../keyGenService/KeyGen')
const UrlModel = require('../models/Url')



router.post('/addkeys', async (req, res) => {
    body = req.body

    try{
        const key = await insertKey(body.key)
        res.status(201).json({key})

    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
    }
    
})

router.post('/', async (req, res) => {
    body = req.body

    try{

        const hostName = req.headers.host
        const key = await getKey()
        const shortenedUrl = `${hostName}/${key.key}`

        const url = new UrlModel({
            url: body.url,
            shortUrl: shortenedUrl
        })

        await url.save((error) => {
            if (error) console.log(error)
        })

        res.status(201).json({url})

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