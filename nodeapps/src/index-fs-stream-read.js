//input stream
const fs = require('fs')
const path = require('path')

// const filePath = './src//assets/info.txt'
const filePath = path.join(__dirname, 'assets/info.txt')

const options = {
    encoding: 'UTF-8'
}

const inputStream = fs.createReadStream(filePath, options)

let data = ''
//attach events
inputStream.on('data', (chunk) => {
    data += chunk
})
inputStream.on('end', () => {
    console.log(data)
})
inputStream.on('error', (err) => {
    console.log(err)
})
