const router = require('express').Router()

const shortenUrlRoute = require('./ShortenUrl')
const addKeysRoute = require('./AddKeys')
const registerRoute = require('./Register')
const loginRoute = require('./Login')
const validate = require('../../validationService/ValidateToken')


router.use('/shorten', validate, shortenUrlRoute)
router.use('/addkeys', addKeysRoute)
router.use('/register', registerRoute)
router.use('/login', loginRoute)



module.exports = router