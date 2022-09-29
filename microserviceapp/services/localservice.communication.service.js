const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

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
    name: 'adder',
    actions: {
        add: {
            handler(ctx) {
                //object destructuring: - break object properties 
                const { a, b } = ctx.params
                return a + b
            }
        }
    }
})

async function main() {
    await broker.start()
    broker.repl()
}
main()