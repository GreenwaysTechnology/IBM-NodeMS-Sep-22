    const { ServiceBroker } = require('moleculer')
    const ApiGateWay = require('moleculer-web')

    const broker = new ServiceBroker()

    //create apigateWay
    broker.createService({
        name: 'ApiGateWay',
        mixins: [ApiGateWay]
    })

    broker.createService({
        name: 'greeter',
        actions: {
            sayHello() {
                return 'Hello,Moleculer'
            }
        }
    })

    broker.createService({
        name: 'math',
        actions: {
            add() {
                return 10 + 10
            }
        }
    })

    async function main() {
        await broker.start()
    }
    main()

