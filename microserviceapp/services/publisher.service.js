const { ServiceBroker } = require("moleculer")

const broker = new ServiceBroker({
    transporter: "TCP"
});

broker.createService({
    name: 'math',
    actions: {
        add: {
            handler(ctx) {
                 ctx.emit("adder.add", { a: ctx.params.a, b: ctx.params.b })
                // ctx.broadcast("adder.add", { a: ctx.params.a, b: ctx.params.b })
                return 'Event has emitted'
            }
        }
    }
})

async function main() {

    try {
        await broker.start()
        console.log('Service Broker is ready')
        broker.repl();
    } catch (error) {
        console.log(error)
    }
}
main();
