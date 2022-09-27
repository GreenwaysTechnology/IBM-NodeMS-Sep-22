//promise constructors

const getUser = () => {
    return new Promise((resolve, reject) => {
        let user = {
            id: 1,
            name: 'admin'
        }
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, { error: 'User Not found' })

        }
    })
}

getUser()
    .then(user => console.log(user))
    .catch(error => console.log(error))
    .finally(() => console.log('done!'))