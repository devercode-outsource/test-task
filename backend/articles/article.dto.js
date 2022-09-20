const Joi = require('joi')

const CreateArticleDTO = Joi.object({
    heading: Joi.string().required().max(255),
    content: Joi.string().required(),
})

const UpdateArticleDTO = Joi.object({
    heading: Joi.string().max(255),
    content: Joi.string()
})
module.exports = {
    CreateArticleDTO,
    UpdateArticleDTO
}