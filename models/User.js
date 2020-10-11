const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        max: 20
    },
    email: {
        type: String,
        required: true,
        max: 100,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 2048
    },
    admin: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('user', userSchema)

module.exports = User