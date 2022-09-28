const express = require('express')
const todoService = require('../services/todo.service')

//create router object 
const todoRouter = express.Router()

todoRouter.get('/', async (req, res) => {
    try {
        const todos = await todoService.findAll()
        res.status(200).json(todos)
    }
    catch (err) {
        res.status(400).json(err)
    }
})
module.exports = todoRouter