const express = require('express');
const articleController = require('./articles/article.controller');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/articles', articleController)
app.listen(process.env.PORT || 3000, () => {
    console.log(`Application Start`)
})