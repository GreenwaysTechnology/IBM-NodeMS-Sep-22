const { ServiceBroker } = require("moleculer")

const broker = new ServiceBroker({
    transporter: "TCP"
});

broker.createService({
    name: 'adder',
    events: {
        "adder.add": {
            params: {
                a: "number",
                b: "number"
            },
            handler(ctx){
                console.log("Payload:", ctx.params);
                console.log("Sender:", ctx.nodeID);
                console.log("Metadata:", ctx.meta);
                console.log("The called event name:", ctx.eventName);
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