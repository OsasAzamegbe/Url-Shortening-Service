const mongoose = require('mongoose')


const urlSchema = mongoose.Schema({
    url: {
        type: Url,
        required: true
    },
    shortUrl: {
        type: Url,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

const urlModel = mongoose.model('url', urlSchema)

module.exports = urlModel