const router = require('express').Router()

const shortenUrlRoute = require('./ShortenUrl')
const addKeysRoute = require('./AddKeys')



router.use('/shorten', shortenUrlRoute)
router.use('/addkeys', addKeysRoute)



module.exports = router