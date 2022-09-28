const { ServiceBroker } = require('moleculer')

//create instance of service Broker 
const broker = new ServiceBroker()

broker.createService({
    name: 'hello',
    actions: {
        //service api
        sayHello() {
            return 'Hello,Moleculer'
        }
    }
})
broker.createService({
    name: 'hai',
    actions: {
        //service api
        sayHai() {
            return 'Hai,Moleculer'
        }
    }
})
broker.createService({
    name: 'greet',
    actions: {
        //service api
        sayGreet() {
            return 'Greet,Moleculer'
        }
    }
})
async function main() {
    try {
        await broker.start()
        const hello = await broker.call('hello.sayHello')
        const hai = await broker.call('hai.sayHai')
        const greet = await broker.call('greet.sayGreet')

        console.log(hello, hai, greet)

    } catch (err) {
        console.log(err)
    }
}
main()
