const getUser = () => {
    console.log('getUser is called')
    return new Promise((resolve, reject) => {
        let user = {
            name: 'admin',
            password: 'admin'
        }
        //user =null
        let error = {
            message: 'User Not found'
        }
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, error)
        }
    })
}

const login = user => {
    console.log('login is called')

    return new Promise((resolve, reject) => {
        if (user.name == 'admin' && user.password === 'admin') {
            setTimeout(resolve, 1000, { message: 'Login Success' })

        } else {
            setTimeout(reject, 1000, { error: 'Login failed' })
        }
    })
}
//
const showDashBoard = status => {
    console.log('showDashBoard is called')

    return new Promise((resolve, reject) => {
        if (status.message === 'Login Success') {
            setTimeout(resolve, 1000, { message: 'Admin Page' })

        } else {
            setTimeout(reject, 1000, { error: 'Error Page' })
        }
    })

}


//nesting callbacks

// getUser(user => {
//     console.log(user)
//     login(user, status => {
//         console.log(status)
//         showDashBoard(status, adminPage => {
//             console.log(adminPage)
//         }, errorPage => {
//             console.log(errorPage)
//         })
//     }, error => {
//         console.log(error)
//     })
// }, err => {
//     console.log(err)
// })

//Promise : The output of one promise will be input to another promise 

// getUser()
//     .then(user => {
//         return login(user)
//     })
//     .then(status => {
//         return showDashBoard(status)
//     })
//     .then(page => {
//         console.log(page)
//     })
//     .catch(err => console.log(err))

getUser()
    .then(user => login(user))
    .then(status => showDashBoard(status))
    .then(page => console.log(page))
    .catch(err => console.log(err))