const { ServiceBroker } = require('moleculer')
const hello = require('./helloparent.service')
const broker = new ServiceBroker()

//parent services

const hai = {
    name: 'hai',
    actions: {
        sayHai() {
            return 'Hai'
        }
    }
}



//child service 
broker.createService({
    name: 'greeter',
    mixins: [hello, hai],
    actions: {
        sayGreet() {
            return 'greet'
        }
    }
})


async function main() {
    await broker.start()
    broker.repl()
}
main()
