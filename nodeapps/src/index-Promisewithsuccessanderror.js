//basic promise implementation:
//In promises , you dont need to pass function as parameter

const getUser = () => {
    return Promise.resolve('User') //factory method : only return success
}

getUser().then(user => console.log(user))

const getError = () => {
    return Promise.reject(new Error('Something went wrong'))
}
getError().catch(err => console.log(err))