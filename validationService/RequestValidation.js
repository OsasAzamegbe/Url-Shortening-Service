const Joi = require('@hapi/joi')

const validateShortenBody = (data) => {
    const schema = Joi.object({
        url: Joi.string().required().uri()
    })

    return schema.validate(data)

}

const validateAddKeysBody = (data) => {
    const schema = Joi.object({
        keys: Joi.array().items({
            key: Joi.string().min(6).max(6).required()
        }).required()
    })

    return schema.validate(data)
}


module.exports = {validateShortenBody, validateAddKeysBody}