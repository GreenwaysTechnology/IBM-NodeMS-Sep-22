const EventEmitter = require('events')

class SalesService extends EventEmitter {
    constructor() {
        super()

        //register listeners
        this.on('sales', (evt) => {
            console.log(evt)
        })

    }
    //biz method
    sale(product) {
        //when ever sales method is called we can trigger event 
        this.emit('sales', product)
    }
}
let salesService = new SalesService()
salesService.sale({ id: 1, name: 'phone' })