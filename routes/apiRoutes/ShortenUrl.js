const router = require('express').Router()

const {getKey} = require('../../keyGenService/KeyGen')
const UrlModel = require('../../models/Url')
const {validateShortenBody} = require('../../validationService/RequestValidation')



router.post('/', async (req, res) => {
    const body = req.body

    //validate body
    const {error} = validateShortenBody(body)
    if (error) {
        return res.status(400).json({error: error.details[0].message})
    }

    
    try{

        const hostName = req.headers.host
        const keyObj = await getKey()
        const key = keyObj.key
        const shortenedUrl = `${hostName}/${key}`

        const url = new UrlModel({
            url: body.url,
            shortUrl: shortenedUrl,
            key,
            user_id: req.user._id
        })

        await url.save((error) => {
            if (error) console.log(error)
        })

        res.status(201).json({url})

    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
    
})


module.exports = router