const fs = require('fs')

const path = './src//assets/info.txt'
const options = {
    encoding: 'UTF-8'
}

function blockMe(message) {
    console.log(message)
}
//async api to read file
blockMe('start')
fs.readFile(path, options, (err, data) => {
    if (err) throw err
    console.log(data)
})
blockMe('end')