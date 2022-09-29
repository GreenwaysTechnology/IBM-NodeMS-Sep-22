const { ServiceBroker } = require('moleculer')

// const broker = new ServiceBroker({
//     transporter: "TCP"
// })
const broker = new ServiceBroker()
broker.createService({
    name: 'math',
    //public methods
    actions: {
        add: {
            handler(ctx) {
                const { a, b } = ctx.params
                //call private methods 
                return this.add(a, b)
            }
        }
    },
    //private methods  
    methods: {
        add(a, b) {
            return a + b
        }
    },
    //life cycle methods
    created() {
        // Fired when the service instance created (with `broker.loadService` or `broker.createService`)
        console.log('service created')
    },

    merged() {
        // Fired after the service schemas merged and before the service instance created
        console.log('service merged')
    },
    
    async started() {
        // Fired when broker starts this service (in `broker.start()`)
        console.log('service started')
    },
    async stopped() {
        // Fired when broker stops this service (in `broker.stop()`)
        console.log('service stoped')
    }



})


async function main() {
    await broker.start()
    broker.repl()
}
main()