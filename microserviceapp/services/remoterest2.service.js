const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    transporter: "TCP",
    serializer: "JSON"
})

broker.createService({
    name: 'adder',
    actions: {
        add: {
            handler(ctx) {
                //object destructuring: - break object properties 
                const { a, b } = ctx.params
                const result = a +b 
                return `${broker.nodeID} -> ${result}`
            }
        }
    }
})

async function main() {
    await broker.start()
    broker.repl()
}
main()