

// class UserService {
//     constructor() { }

//     //findAll 
//     findAll() {
//         return [{
//             id: 1,
//             name: 'Subramanian'
//         },
//         {
//             id: 2,
//             name: 'Ram'
//         }
//         ]
//     }
// }

const USERS = [{
    id: 1,
    name: 'Subramanian'
},
{
    id: 2,
    name: 'Ram'
}
]
//async with callback pattern 
// class UserService {
//     constructor() { }

//     //findAll 
//     findAll(callback) {
//         setTimeout(callback,1000,USERS)
//     }
// }

//promises
class UserService {
    constructor() { }

    //findAll 
    findAll() {
        return new Promise((resolve,reject)=>{
            setTimeout(resolve,1000,USERS)
        })
    }
}
//
module.exports = new UserService()