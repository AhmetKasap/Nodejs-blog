const express = require('express')
const app = express()
const exphbs = require('express-handlebars')


//* MongoDB connection
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/blog_db')

//* bodyParser import
const bodyParser = require('body-parser');     
app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json())



//* Handlebars import
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//* File to public
app.use(express.static('public')); 


//* routes import
const main = require('./routes/main')
app.use('/', main)

const post = require('./routes/post')
app.use(post)

const blog = require('./routes/blog')
app.use(blog)

app.use('/',(req,res) => {  
    res.render('site/index')
})



app.listen(3000)
console.log("Server Çalışıyor")