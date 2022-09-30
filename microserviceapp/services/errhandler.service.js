const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");
const PRODUCTS = require('./mock-data/products')
const compression = require('compression')
const broker = new ServiceBroker();

const { MoleculerError } = require("moleculer").Errors;

class MyBusinessError extends MoleculerError {
    constructor(msg, data) {
        super(msg || `This is my business error.`, 500, "MY_BUSINESS_ERROR", data);
    }
}


broker.createService({
    name: 'products',
    actions: {
        //GET ALL products
        list: {
            rest: "GET /",
            handler(ctx) {
                let isError = true;
                if (isError) throw new MyBusinessError();
                return PRODUCTS;
            }
        },
        //GET product by id
        get: {
            rest: "GET /:id",
            handler(ctx) {
                console.log(ctx.params)
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
        // Global error handler
        onError(req, res, err) {
            res.setHeader("Content-Type", "text/plain");
            res.writeHead(501);
            res.end("Global error: " + err.message);
        },
        routes: [{
            path: '/api',
            use: [
                compression()
            ],
            aliases: {
            },
            autoAliases: true,
            // Route error handler
            onError(req, res, err) {
                res.setHeader("Content-Type", "application/json; charset=utf-8");
                res.writeHead(500);
                res.end(JSON.stringify({ err: err }));
            }
        }]
    }
})
async function main() {
    try {
        await broker.start();
    }
    catch (e) {
        log(e);
    }
}
main()