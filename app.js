const express = require('express')
const { MongoServerClosedError } = require('mongodb')
const cookieParser = require("cookie-parser");
const mongoose = require('mongoose')
const url = 'mongodb+srv://mg:mgmgmygmyg@fxtestcase.3sa58qk.mongodb.net/?retryWrites=true&w=majority'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(cookieParser());
app.use(express.json())


const routes = require('./routes/index')
app.use(routes)

app.listen(9000, () => {
    console.log('server started')
})