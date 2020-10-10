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

const insertKey = (data) => {
    Key.insertMany(
        data
    )
}


module.exports = {insertKey, getKey}