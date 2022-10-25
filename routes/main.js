const express = require('express')
const router = express.Router()


router.use('/contact',(req,res) => {
    res.render('site/contact')
})
router.use('/blog-single',(req,res) => {
    res.render('site/blog-single')
})
router.use('/about',(req,res) => {
    res.render('site/about')
})
router.use('/login',(req,res) => {
    res.render('site/login')
})
router.use('/register',(req,res) => {
    res.render('site/register')
})

router.use('/post', (req,res) => {
    res.render('site/blog-single')
})

module.exports = router