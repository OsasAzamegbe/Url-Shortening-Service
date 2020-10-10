const router = require('express').Router()

const shortenUrlRoute = require('./ShortenUrl')
const addKeysRoute = require('./AddKeys')
const registerRoute = require('./Register')
const loginRoute = require('./Login')



router.use('/shorten', shortenUrlRoute)
router.use('/addkeys', addKeysRoute)
router.use('/register', registerRoute)
router.use('/login', loginRoute)



module.exports = router