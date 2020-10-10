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

const loginValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().required().email().max(100),
        password: Joi.string().max(2048).min(8).required()
    })

    return schema.validate(data)
}


const registerValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().required().max(20),
        email: Joi.string().required().email().max(100),
        password: Joi.string().max(2048).min(8).required()
    })

    return schema.validate(data)
}


module.exports = {
    validateShortenBody, 
    validateAddKeysBody, 
    loginValidation, 
    registerValidation
}