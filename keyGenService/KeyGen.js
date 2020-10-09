const Key = require('../models/Key')
const UsedKey = require('../models/UsedKeys')


const getKey = async () => {
    const key = await Key.findOneAndDelete()
    const usedKey = new UsedKey({
        key
    })
    await usedKey.save()

    return key
}

const insertKey = (data) => {
    Key.insertMany(
        data
    )
}


module.exports = {insertKey, getKey}