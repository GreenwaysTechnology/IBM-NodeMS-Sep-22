const { ServiceBroker } = require('moleculer')
const fs = require('fs')
const path = require('path')

const broker = new ServiceBroker()

//stream service
broker.createService({
    name: 'storage',
    actions: {
        get: {
            handler(ctx) {
                const filePath = path.join(__dirname, 'assets/info.txt');
                const options = {
                    encoding: 'UTF-8'
                }
                const stream = fs.createReadStream(filePath, options)
                let data = ''
                stream.on('data', chunk => {
                    data += chunk
                })
                stream.on('end', () => {
                    console.log(chunk)
                })
            }
        }
    }
})


async function main() {
    await broker.start()
    broker.repl()
}
main()