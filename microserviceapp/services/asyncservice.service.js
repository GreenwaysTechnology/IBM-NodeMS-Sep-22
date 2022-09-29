const { ServiceBroker } = require('moleculer')


const broker = new ServiceBroker()

broker.createService({
    name: 'math',
    actions: {
        add: {
            async handler(ctx) {
                const result = await ctx.call('adder.add', { a: 10, b: 10 })
                return result
            }
        }
    }
})

broker.createService({
    name: 'adder',
    actions: {
        add: {
            handler(ctx) {
                //return Promise 
                return new this.Promise((resolve, reject) => {
                    setTimeout(resolve, 5000, ctx.params.a + ctx.params.b)
                })
            }
        }
    }
})

async function main(){
    await broker.start()
    broker.repl()
}
main()