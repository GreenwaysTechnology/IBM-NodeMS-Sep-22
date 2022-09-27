
function blockMe(message){
    console.log(message)
}
//either success or failure 
const getUser = () => {
    let user = {
        id: 1,
        name: 'admin'
    }
    if (user) {
        return Promise.resolve(user)
    } else {
        return Promise.reject('No User found')
    }
}
blockMe('start')
getUser()
    .then(user => console.log(user))
    .catch(error => console.log(error))
    .finally(() => console.log('done!'))
blockMe('end')