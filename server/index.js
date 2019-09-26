const express = require('express');
const app = express();
app.use(require('cors')())

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
    res.send('index')
})


app.listen(3001, () => {
    console.log('http:localhost:3001')
});
