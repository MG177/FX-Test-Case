const express = require('express')
const { addListener } = require('../models/comments')
const router = express.Router()
const Comment = require('../models/comments')

router.get('/', async(req,res) => {
    try {
        const comment =  await Comment.find()
        res.json(comment)
    } catch (err) {
        res.send('Error '+ err)
    }
})

router.get('/:id', async(req,res) => {
    try {
        const comment =  await Comment.findById(req.params.id)
        res.json(comment)
    } catch (err) {
        res.send('Error '+ err)
    }
})

router.post('/', async(req,res) => {
    const comment = new Comment({
        name: req.body.name,
        date: req.body.date,
        text: req.body.text
    })
    try {
        const a1 = await comment.save()
        res.json(a1)
    } catch (err) {
        res.send('Error' + err)
    }
})

router.patch('/:id',async(req,res)=>{
    try{
        const comment = await Comment.findById(req.params.id)
        if(req.body.name){
            comment.name = req.body.name
        }
        if(req.body.date){
            comment.date = req.body.date
        }
        if(req.body.text){
            comment.text = req.body.text
        }
        const a1 = await comment.save()
        res.json(a1)
    }catch (err) {
        res.send('Error '+ err)
    }
})

module.exports = router