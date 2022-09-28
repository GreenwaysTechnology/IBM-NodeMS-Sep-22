
const USERS = [{
    id: 1,
    name: 'Subramanian'
},
{
    id: 2,
    name: 'Ram'
}
]
class UserService {
    constructor() { }

    //findAll 
    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, USERS)
        })
    }
    findById(id) {
        return USERS.filter(user => user.id == id)
    }
    save(user) {
        return USERS.concat(user)
    }
}
module.exports = new UserService()