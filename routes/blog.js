const express = require('express')
const router = express.Router()

const blogModel = require('../models/post')



router.get('/blog', (req,res) => {
    res.render('site/blog')
})


router.post('/addpost', (req,res) => {
    blogModel.find({}).then(posts => {
        res.render('site/blog', {posts : posts})
    })
})


module.exports = router