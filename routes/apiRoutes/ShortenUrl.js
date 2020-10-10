const router = require('express').Router()

const {getKey} = require('../../keyGenService/KeyGen')
const UrlModel = require('../../models/Url')



router.post('/', async (req, res) => {
    const body = req.body

    try{

        const hostName = req.headers.host
        const keyObj = await getKey()
        const key = keyObj.key
        const shortenedUrl = `${hostName}/${key}`

        const url = new UrlModel({
            url: body.url,
            shortUrl: shortenedUrl,
            key
        })

        await url.save((error) => {
            if (error) console.log(error)
        })

        res.status(201).json({url})

    } catch (error) {
        res.status(500).json({message: "Internal Server Error"})
    }
    
})


module.exports = router