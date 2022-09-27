//callback nesting: the output of one callback will be input to another callback

//getUser ---> login ---> showdashboard

const getUser = (resolve, reject) => {
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
}

const login = (user, resolve, reject) => {
    if (user.name == 'admin' && user.password === 'admin') {
        setTimeout(resolve, 1000, { message: 'Login Success' })

    } else {
        setTimeout(reject, 1000, { error: 'Login failed' })
    }
}
//
const showDashBoard = (status, resolve, reject) => {
    if (status.message === 'Login Success') {
        setTimeout(resolve, 1000, { message: 'Admin Page' })

    } else {
        setTimeout(reject, 1000, { error: 'Error Page' })
    }

}



//nesting callbacks

getUser(user => {
    console.log(user)
    login(user, status => {
        console.log(status)
        showDashBoard(status, adminPage => {
            console.log(adminPage)
        }, errorPage => {
            console.log(errorPage)
        })
    }, error => {
        console.log(error)
    })
}, err => {
    console.log(err)
})