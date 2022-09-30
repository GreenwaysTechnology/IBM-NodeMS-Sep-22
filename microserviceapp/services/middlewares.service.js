const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");
const PRODUCTS = require('./mock-data/products')
const compression = require('compression')

const broker = new ServiceBroker();

//CURD service : 

broker.createService({
    name: 'products',
    actions: {
        //GET ALL products
        list: {
            rest: "GET /",
            handler(ctx) {
                return PRODUCTS;
            }
        },
        //GET product by id
        //products/1
        get: {
            rest: "GET /:id",
            handler(ctx) {
                console.log('products', ctx.params)
                return PRODUCTS.filter(product => product.id == ctx.params.id)
            }
        },
        //save
        create: {
            rest: "POST /",
            handler(ctx) {
                console.log(ctx.params)
                return 'Product Created'
            }
        },
        //update
        update: {
            rest: "PUT /:id",
            handler(ctx) {
                console.log(ctx.params)
                return 'Product update'
            }
        },
        //delete
        remove: {
            rest: "DELETE /:id",
            handler(ctx) {
                console.log(ctx.params)
                return 'Product update'
            }
        }
    }
})


broker.createService({
    name: 'APIGateWay',
    mixins: [ApiGateWayService],
    settings: {
        routes: [{
            path: '/api',
            use: [
                compression()
            ],
            aliases: {
                //here you can even give configuration
            },
            autoAliases: true
        }]
    }
})


async function init() {
    try {
        await broker.start();
    }
    catch (e) {
        log(e);
    }
}
init();