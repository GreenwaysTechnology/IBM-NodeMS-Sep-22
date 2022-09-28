const http = require('http')


//create server
const server = http.createServer((req, res) => {
    //read User input 
    let data = ''
    req.on('data', chunk => {
        data += chunk
    })
    req.on('end', () => {
        console.log(data)
        res.end(data)
    })

})

//deploy/start server

server.listen(3000, () => {
    console.log('HTTP server starts')
})