const router = require('express').Router()

const shortenUrlRoute = require('./ShortenUrl')
const addKeysRoute = require('./AddKeys')
const validate = require('../../validationService/ValidateToken')


router.use('/shorten', validate, shortenUrlRoute)
router.use('/addkeys', addKeysRoute)


module.exports = router