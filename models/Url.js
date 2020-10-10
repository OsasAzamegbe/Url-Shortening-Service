const mongoose = require('mongoose')


const urlSchema = mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    },
    key: {
        type: String,
        required: true,
        unique: true
    },
    user_id:{
        type: Object,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

const urlModel = mongoose.model('url', urlSchema)

module.exports = urlModel