const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker({
    transporter: "TCP",
    serializer: "JSON"
})

//create apigateWay
broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay]
})
broker.createService({
    name: 'math',
    actions: {
        add: {
            handler(ctx) {
                //call adder.add 
                return ctx.call('adder.add', { a: 10, b: 10 })
            }
        }
    }

})

async function main() {
    await broker.start()
}
main()