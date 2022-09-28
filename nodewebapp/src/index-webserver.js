const http = require('http')


//create server
const server = http.createServer((req,res)=>{
    //logic
    res.write("<h1>Hello,How are you node?, I am fine!</h1>")
    res.end()
})

//deploy/start server

server.listen(3000,()=>{
    console.log('HTTP server starts')
})