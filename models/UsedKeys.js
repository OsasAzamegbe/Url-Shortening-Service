const mongoose = require('mongoose')


const keySchema = mongoose.Schema({
    key: {
        type: String,
        required: true
    }
})

const UsedKey = mongoose.model('usedkey', keySchema)

module.exports = UsedKey