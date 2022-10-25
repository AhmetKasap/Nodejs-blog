const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title : {type : String, require: true},
    content : {type : String, require: true}
})

module.exports = mongoose.model('POST', postSchema)