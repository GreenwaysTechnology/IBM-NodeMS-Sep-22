const { ServiceBroker } = require('moleculer')
const ApiGateWayService = require("moleculer-web");

const broker = new ServiceBroker({
    //nodeID: - machineName-processId
    transporter: 'TCP',
    //load balancer configuration
    registry: {
        discoverer: 'LOCAL', //type of registry
        strategy: 'RoundRobin' //load balancer algorthim
    }
})
//back end service
broker.createService({
    name: 'math',
    actions: {
        get: {
            rest: "GET /add",
            handler(ctx) {
                return ctx.call('adder.add', { a: ctx.params.a, b: ctx.params.b })
            }
        }
    }
})

broker.createService({
    name: 'ApiGateWayService',
    mixins: [ApiGateWayService],
    settings: {
        routes: [
            {
                path: "/api",
                aliases: {

                },
                autoAliases: true
            }
        ]
    }
})

async function main() {
    try {
        await broker.start()
        broker.repl();
    }
    catch (err) {
        console.log(err);
    }

}
main()