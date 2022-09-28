const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const fs =require('fs')
const path = require('path')

const userRouter = require('./routers/user.router')
const todoRouter = require('./routers/todo.router')
//create application object 

const app = express()
//register middleware
app.use(bodyParser.json())
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

//mount the userRouter with app .
app.use('/api/users', userRouter)
app.use('/api/todos',todoRouter)


//home page
app.get('/', (req, res) => {
    res.end('Home')
})


//start server 
app.listen(3000, () => {
    console.log('Express app is running!')
})