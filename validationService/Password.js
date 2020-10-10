const bcrypt = require('bcryptjs')


const encryptPassword = async (password) => {
    const SALT = await bcrypt.genSalt(10)
    const encryptedPassword = await bcrypt.hash(password, SALT)

    return encryptedPassword
}

const validatePassword = async (password, encryptedPassword) => {
    const valid = await bcrypt.compare(password, encryptPassword)

    return valid
}



module.exports = {encryptPassword, validatePassword}