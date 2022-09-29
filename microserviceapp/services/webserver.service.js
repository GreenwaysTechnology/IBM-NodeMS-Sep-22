const { ServiceBroker } = require('moleculer')
const broker = new ServiceBroker();

//simulating some webserver settings

const webServer = {
    name: 'webserver',
    //parent properties
    settings: {
        port: 8080,
        host: 'ibm.com'
    }
}

broker.createService({
    name: 'MyWebServer',
    mixins: [webServer],
    //override existing properties
    settings: {
        port: 3000
    },
    actions: {
        getInfo() {
            return this.settings.port
        }
    }
})

async function main() {
    await broker.start()
    broker.repl()
}
main() 
