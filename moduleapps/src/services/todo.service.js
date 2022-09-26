const TODOS = require('../mockdata/todo')


class TodoService {
    constructor() {

    }
    //biz apis
    save() {
        return 'save'
    }
    findAll() {
        return TODOS
    }
    find() {
        return 'find'
    }
    remove() {
        return 'remove'
    }
}
// module.exports = TodoService

//return object 
module.exports = new TodoService()



