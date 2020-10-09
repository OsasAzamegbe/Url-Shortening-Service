const mongoose = require('mongoose')


const keySchema = mongoose.Schema({
    key: {
        type: String,
        required: true,
        unique: true
    }
})

const UsedKey = mongoose.model('usedkey', keySchema)

module.exports = UsedKey