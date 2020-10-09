const router = require('express').Router()



router.post('/', (req, res) => {
    res.json({"welcome to the api route"})
})



module.exports = router