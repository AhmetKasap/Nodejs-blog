const express = require('express')
const router = express.Router()
const postModel = require('../models/post')

router.get('/addpost',(req,res) => {
    res.render('site/addpost')
})

router.post('/addpost', (req,res) => {
    postModel.create(req.body)
    console.log(JSON.stringify(req.body))
    res.redirect('/')
})

module.exports = router