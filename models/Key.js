const mongoose = require('mongoose')


const keySchema = mongoose.Schema({
    key: {
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 6
    }
})

const Key = mongoose.model('key', keySchema)

module.exports = Key