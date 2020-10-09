const router = require('express').Router()

const shortenUrlRoute = require('./ShortenUrl')



router.use('/shorten', shortenUrlRoute)



module.exports = router