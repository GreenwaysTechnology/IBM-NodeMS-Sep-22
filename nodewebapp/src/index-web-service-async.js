const http = require('http')
const userservice = require('./services/users.service')


//create server - sync call
// const server = http.createServer((req, res) => {
//     const users = userservice.findAll()
//     //set header
//     res.writeHead(200, {
//         'Content-Type': 'application/json'
//     })
//     res.end(JSON.stringify(users))
// })
//async call
// const server = http.createServer((req, res) => {
//     userservice.findAll(users => {
//         //set header
//         res.writeHead(200, {
//             'Content-Type': 'application/json'
//         })
//         res.end(JSON.stringify(users))
//     })

// })

//promise 
// const server = http.createServer((req, res) => {
//     userservice.findAll()
//         .then(users => {
//             res.writeHead(200, {
//                 'Content-Type': 'application/json'
//             })
//             res.end(JSON.stringify(users))
//         }).catch(err => {
//             res.end(JSON.stringify(err))
//         })

// })

//promise with async await
const server = http.createServer(async (req, res) => {
    const users = await userservice.findAll()
    //set header
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    res.end(JSON.stringify(users))

})

//deploy/start server

server.listen(3000, () => {
    console.log('HTTP server starts')
})