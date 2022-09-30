const { ServiceBroker } = require('moleculer')
const ApiGateWay = require('moleculer-web')

const broker = new ServiceBroker({
    transporter: "TCP",
    serializer: "JSON"
})

//http://localhost:3000/api/add
//create apigateWay
broker.createService({
    name: 'ApiGateWay',
    mixins: [ApiGateWay],
    settings: {
        routes: [{
            path: '/admin'            
        },
        {
            path: '/api',
            whitelist: [
                //"math.add",
                "math*"
            ],
            aliases: {
                "add": "math.add",
                "div": "math.div"
            }

        }]
    }

})
broker.createService({
    name: 'math',
    actions: {
        add: {
            handler(ctx) {
                return 10 + 10
            }
        },
        div: {
            handler(ctx) {
                return 10 / 10
            }
        }
    }

})

async function main() {
    await broker.start()
}
main()