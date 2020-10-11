const Key = require('../models/Key')
const UsedKey = require('../models/UsedKeys')


const getKey = async () => {
    const keyObj = await Key.findOneAndDelete()
    const key = keyObj.key
    const usedKey = new UsedKey({
        key
    })
    await usedKey.save()

    return keyObj
}

const insertKey = async (data) => {
    const inserted = await Key.insertMany(data)
    return inserted
}


const clearKeysDb = async () => {
    const deletedKeys = await Key.deleteMany({})
    const deletedUsedKeys = await UsedKey.deleteMany({})

    return {deletedKeys, deletedUsedKeys}
}


module.exports = {insertKey, getKey, clearKeysDb}