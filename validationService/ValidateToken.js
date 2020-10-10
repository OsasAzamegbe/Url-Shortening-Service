const jwt = require('jsonwebtoken')


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

module.exports = validateToken