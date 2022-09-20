const { Router } = require('express')
const articleService = require('./article.service');
const validator = require('express-joi-validation').createValidator()
const articleController = Router()
const { CreateArticleDTO, UpdateArticleDTO } = require('./article.dto')

articleController.get('/', async (req, res) => {
    const articles = await articleService.getAll();
    res.json(articles)
})

articleController.get('/:id', async (req, res) => {
    const { id } = req.params;
    const article = await articleService.getById(id)
    if (!article) {
        return res.status(400).send('Bad Request')
    }
    return res.json(article)
})

articleController.post('/', validator.body(CreateArticleDTO), async (req, res) => {
    const article = await articleService.create(req.body);
    return res.json(article)
})

articleController.patch('/:id', validator.body(UpdateArticleDTO), async (req, res) => {
    const article = await articleService.update(req.params.id, req.body)
    return res.json(article)
})

module.exports = articleController