const router = require('express').Router()

const {insertKey, clearKeysDb} = require('../../keyGenService/KeyGen')
const {genKeys} = require('../../keyGenService/GenerateKeys')
const {validateAddKeysBody} = require('../../validationService/RequestValidation')
const Key = require('../../models/Key')
const UsedKeys = require('../../models/UsedKeys')


router.post('/', async (req, res) => {

    try{
        const body = req.body

        //validate body
        const {error} = validateAddKeysBody(body)
        if (error) {
            return res.status(400).json({error: error.details[0].message})
        }

        //clear Keys and UsedKeys DB
        const cleared = await clearKeysDb()
        const notEmptyKeys = await Key.countDocuments()
        const notEmptyUsedKeys = await UsedKeys.countDocuments()
        if(notEmptyKeys || notEmptyUsedKeys) {
            console.log(notEmptyKeys, notEmptyUsedKeys)
            return res.status(500).json({error: "Database couldn't be cleared"})
        }

        //generate keys
        const {length, size} = body
        const keys = genKeys(length, size)

        //insert keys
        const inserted = await insertKey(keys)

        res.status(201).json({message: "Keys inserted successfully", inserted: inserted.length})

    } catch (error) {
        res.status(400).json({error: "Bad Request"})
    }
})

module.exports = router