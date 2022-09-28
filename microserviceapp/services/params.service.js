const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker()

//create service :
broker.createService({
    name: 'hello',
    actions: {
        sayHello(ctx) {
            const name = ctx.params.name
            return `Hello ${name}`
        }
    }
})
//
broker.createService({
    name: 'math',
    actions: {
        //normal pattern 
        multiply(ctx) {
            const a = ctx.params.a
            const b = ctx.params.b
            return a * b
        },
        divide: {
            //param validation logic
            params: {
                a: "number",
                b: "number"
            },
            //biz logic 
            handler(ctx) {
                const a = ctx.params.a
                const b = ctx.params.b
                return a / b
            }
        }
    }
})


async function main() {
    try {
        await broker.start()
        //params are passed as single literal object 
        const res1 = await broker.call('hello.sayHello', { name: 'Subramanian' })
        console.log(res1)
        const res2 = await broker.call('hello.sayHello', { name: 'Ford' })
        console.log(res2)

        const multply = await broker.call('math.multiply', { a: 10, b: '10' })
        console.log(multply)


        //this code will throw validation error
        //const div = await broker.call('math.divide', { a: 10, b: '10' })
        const div = await broker.call('math.divide', { a: 10, b: 10 })
        console.log(div)


    } catch (err) {
        console.log(err)
    }
}
main()
