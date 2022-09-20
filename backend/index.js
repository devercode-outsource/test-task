require('dotenv').config()
const express = require('express');
const cors = require('cors')

const articleController = require('./articles/article.controller');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())
app.use(cors({
    origin: '*'
}))
app.use(bodyParser.urlencoded({ extended: true }))


app.use('/articles', articleController)
app.listen(process.env.PORT, () => {
    console.log(`Application Start on ${process.env.PORT}`)
})