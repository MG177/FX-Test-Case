const express = require('express')
const { MongoServerClosedError } = require('mongodb')
const mongoose = require('mongoose')
const url = 'mongodb+srv://mg:mgmgmygmyg@fxtestcase.3sa58qk.mongodb.net/test'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())


const commentRouter = require('./routes/index')
app.use('/',commentRouter)

app.listen(9000, () => {
    console.log('server started')
})