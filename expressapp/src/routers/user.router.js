const express = require('express')
const usersService = require('../services/users.service')

//create router object 
const userRouter = express.Router()

//Request handling: HTTP method GET  With URL 
// GET http://localhost:3000/api/users
userRouter.get('/', async (req, res) => {
    try {
        const users = await usersService.findAll()
        res.status(200).json(users)
    }
    catch (err) {
        res.status(400).json(err)
    }
})
// GET http://localhost:3000/api/users/1
userRouter.get('/:id', async (req, res) => {
    const params = req.params
    try {
        const users = await usersService.findById(params.id)
        res.status(200).json(users)
    }
    catch (err) {
        res.status(400).json(err)
    }
})
//post 
userRouter.post('/', async (req, res) => {
  
    try {
        const user = req.body
        console.log(user)
        const users = await usersService.save(user)
        res.status(200).json(users)
    }
    catch (err) {
        res.status(400).json(err)
    }
})


module.exports = userRouter