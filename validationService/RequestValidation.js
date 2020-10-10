const Joi = require('@hapi/joi')

const validateShortenBody = (data) => {
    const schema = Joi.object({
        url: Joi.string().required().uri()
    })

    return schema.validate(data)

}


module.exports = {validateShortenBody}