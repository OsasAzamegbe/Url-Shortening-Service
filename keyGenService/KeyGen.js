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

const insertKey = async (data) => {
    const key = new Key({
        key: data
    })

    await key.save()

    return key
}


module.exports = {insertKey, getKey}