const { ServiceBroker } = require('moleculer')

//create instance of service Broker 
const broker = new ServiceBroker()

//create service :
broker.createService({
    name: 'HelloWorld',
    actions: {
        //service api
        sayHello() {
            return 'Hello,Moleculer'
        },
        sayHai() {
            return 'Hai,Moleculer'
        },
        sayGreet() {
            return 'Greet,Moleculer'
        }
    }
})
async function main() {
    try {
        await broker.start()
        const hello = await broker.call('HelloWorld.sayHello')
        const hai = await broker.call('HelloWorld.sayHai')
        const greet = await broker.call('HelloWorld.sayGreet')

        console.log(hello,hai,greet)

    } catch (err) {
        console.log(err)
    }
}
main()
