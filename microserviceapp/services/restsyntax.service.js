const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");
const PRODUCTS = require('./mock-data/products')

const broker = new ServiceBroker();

//CURD service : 

broker.createService({
    name: 'products',
    actions: {
        //GET ALL products
        list: {
            handler(ctx) {
                return PRODUCTS;
            }
        },
        //GET product by id
        //products/1
        get: {
            handler(ctx) {
                console.log('products', ctx.params)
                return PRODUCTS.filter(product => product.id == ctx.params.id)
            }
        },
        //save
        create(ctx) {
            console.log(ctx.params)
            return 'Product Created'
        },
        //update
        update(ctx) {
            console.log(ctx.params)
            return 'Product updated'
        },
        //delete
        remove(ctx) {
            console.log(ctx.params)
            return 'Product removed'
        }
    }
})


broker.createService({
    name: 'APIGateWay',
    mixins: [ApiGateWayService],
    settings: {
        routes: [{
            path: '/api',
            aliases: {
                "REST products": "products",
                //"REST users" : "users"
            }
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