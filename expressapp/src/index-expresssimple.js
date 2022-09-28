const express = require('express')

//create application object 
const app = express()


//home page
app.get('/',(req,res)=>{
    res.end('Home')
})

//Request handling: HTTP method GET  With URL 
app.get('/api/users', (req, res) => {
    res.end('users')
})

//start server 
app.listen(3000, () => {
    console.log('Express app is running!')
})