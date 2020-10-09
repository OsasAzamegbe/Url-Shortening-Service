const Key = require('../models/Key')


const getKey = async () => {
    const key = await Key.findOneAndDelete()
    return key
}

const insertKey = async (data) => {
    const key = new Key({
        key: data
    })

    key.save((err) => {
        if (err) throw err
    })

    return key
}


module.exports = {insertKey, getKey}