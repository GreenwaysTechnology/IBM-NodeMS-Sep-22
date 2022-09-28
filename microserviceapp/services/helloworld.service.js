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
        }
    }
})

//start moleculer server(brower)
// function main() {
//     broker.start()
//         .then(() => {
//             console.log("Moleculer server is succfully started")
//             //invoke service
//             broker.call('HelloWorld.sayHello')
//                 .then(res => console.log(res))
//                 .catch(err => { console.log(err) })
//         })
//         .catch(err => {
//             console.log("Moleculer server faile  to server")
//         })
// }
async function main() {
    try {
        await broker.start()
        const res = await broker.call('HelloWorld.sayHello')
        console.log(res)

    } catch (err) {
        console.log(err)
    }
}
main()
