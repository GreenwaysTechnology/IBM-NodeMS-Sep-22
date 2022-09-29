const { ServiceBroker } = require('moleculer')

// const broker = new ServiceBroker({
//     transporter: "TCP"
// })
const broker = new ServiceBroker({
    transporter: "nats://localhost:4222",
    serializer: "JSON"
})
broker.createService({
    name: 'math',
    actions: {
        add: {
            handler(ctx) {
                const a = ctx.params.a
                const b = ctx.params.b
                //call adder.add 
                return ctx.call('adder.add', { a: a, b: b })
            }
        }
    }

})
broker.createService({
    name:'customer',
    actions: {
        list: {
            handler(ctx){
                return ctx.call('product.list')
            }
        }
    }
})

async function main() {
    await broker.start()
    broker.repl()
}
main()