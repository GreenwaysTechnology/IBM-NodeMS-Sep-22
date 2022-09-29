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
    }

})


async function main() {
    await broker.start()
    broker.repl()
}
main()