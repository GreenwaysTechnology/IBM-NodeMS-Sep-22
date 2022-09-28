const express = require('express')
const usersService = require('./services/users.service')
const todoService = require('./services/todo.service')

//create application object 
const app = express()

//home page
app.get('/', (req, res) => {
    res.end('Home')
})

//Request handling: HTTP method GET  With URL 
app.get('/api/users', async (req, res) => {
    try {
        const users = await usersService.findAll()
        res.status(200).json(users)
    }
    catch (err) {
        res.status(400).json(err)
    }
})
app.get('/api/todos', async (req, res) => {
    try {
        const todos = await todoService.findAll()
        res.status(200).json(todos)
    }
    catch (err) {
        res.status(400).json(err)
    }
})

//start server 
app.listen(3000, () => {
    console.log('Express app is running!')
})