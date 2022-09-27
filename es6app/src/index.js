//literal 

//profile is just variable
const profile = {
    //instance variables
    id: 1,
    name: 'Subramanian',
    status: true
}
console.log(`Id ${profile.id} ${profile.name} ${profile.status}`)

//most of the time , literal objects will not have methods, but some uses cases we have.

let userService = {
    //methods
    //syntax:1
    save: function () {
        return 'save method'
    },
    //syntax 2: arrow 
    insert: () => 'save method',
    //syntax 3: es 6 class method style 
    findAll() {
        return 'findAll'
    }
}

console.log(userService.save())
console.log(userService.insert())
console.log(userService.findAll())
