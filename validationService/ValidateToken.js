const jwt = require('jsonwebtoken')
const User = require('../models/User')


const validateToken = (req, res, next) => {
    try{
        const token = req.header("Authorization")
        const credentials = jwt.verify(token, process.env.JWT_TOKEN_SECRET)
        req.user = credentials
        next()

    } catch (error) {
        res.status(401).json({error: "Access Denied"})
    }
}

const validateAdmin = async (req, res, next) => {
    try{
        const credentials = req.user
        const user = await User.findById(credentials._id)        
        if (!user.admin) throw "Not an Admin"
        next()

    } catch (error) {
        res.status(401).json({error: "errorrrrr"})
    }
}

module.exports = {validateToken, validateAdmin}