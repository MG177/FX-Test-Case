const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now
    },
    text:{
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Comment',commentSchema)