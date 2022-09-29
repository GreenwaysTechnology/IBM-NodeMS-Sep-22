const { ServiceBroker } = require("moleculer")

const broker = new ServiceBroker();

broker.createService({
    name: 'posts',
    actions: {
        findAll() {
            return [{ id: 1, name: 'Microservices' }]
        }
    },
    //Life cycle methods
    created() {
        console.log('Posts Service Created')
    },
    merged() {
        // Fired after the service schemas merged and before the service instance created
        console.log('Posts Service merged')
    },

    async started() {
        // Fired when broker starts this service (in `broker.start()`)
        console.log('Posts Service started')
    },
    async stopped() {
        // Fired when broker stops this service (in `broker.stop()`)
        console.log('Posts Service stoped')
    }
})


async function main() {

    try {
        await broker.start()
        console.log('Service Broker is ready')
        await broker.repl()

    } catch (error) {
        console.log(error)
    }
}
main();