const router = require('express').Router()



router.post('/', (req, res) => {
    res.json({message: "welcome to the Shorten Url route"})
})



module.exports = router