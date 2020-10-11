const router = require('express').Router()

const shortenUrlRoute = require('./ShortenUrl')
const addKeysRoute = require('./AddKeys')
const registerRoute = require('./Register')
const loginRoute = require('./Login')

const {validateToken, validateAdmin} = require('../../validationService/ValidateToken')


router.use('/shorten', validateToken, shortenUrlRoute)
router.use('/addkeys', validateToken, validateAdmin, addKeysRoute)
router.use('/register', registerRoute)
router.use('/login', loginRoute)


module.exports = router