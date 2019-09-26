const express = require('express');
const app = express();

app.use(require('cors')())
app.use(express.json())

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ele-admin', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
})

const Article = mongoose.model('Article', new mongoose.Schema({
    title: {type: String},
    body: {type: String},
}))


app.get('/', async (req, res) => {
    res.send('hello express')
})

app.post('/api/articles', async (req, res) => {
    const article = await Article.create(req.body)
    res.send(article)
})

app.get('/api/articles', async (req, res) => {
    const articles = await Article.find()
    res.send(articles)
})

app.delete('/api/article/:id', async (req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.send({
        status: 200
    })
})

app.get('/api/article/:id', async (req, res) => {
    const article = await Article.findById(req.params.id)
    res.send(article)
})

app.put('/api/article/:id', async (req, res) => {
    await Article.findByIdAndUpdate(req.params.id, req.body)
    res.send({
        status: 200
    })
})


app.listen(3001, () => {
    console.log('http:localhost:3001')
});
