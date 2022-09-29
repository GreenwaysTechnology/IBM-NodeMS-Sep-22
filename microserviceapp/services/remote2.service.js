const { ServiceBroker } = require('moleculer')

// const broker = new ServiceBroker({
//     transporter: "TCP"
// })
const broker = new ServiceBroker({
    transporter: "nats://localhost:4222",
    serializer: "JSON"
})

broker.createService({
    name: 'adder',
    actions: {
        add: {
            handler(ctx) {
                //object destructuring: - break object properties 
                const { a, b } = ctx.params
                return `${broker.nodeID} -> ${a} + ${b}`
            }
        }
    }
})

broker.createService({
    name: 'product',
    actions: {
        list: {
            handler(ctx) {
                return [{ id: 1, name: 'Phone', qty: 10, price: 100 }, { id: 2, name: 'TV', qty: 10, price: 340 }]
            }
        }
    }
})

async function main() {
    await broker.start()
    broker.repl()
}
main()