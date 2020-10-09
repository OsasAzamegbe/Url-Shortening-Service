const mongoose = require('mongoose')


const keySchema = moongoose.Schema({
    key: {
        type: String,
        required: true
    }
})

const Key = mongoose.model('key', keySchema)

module.exports = Key