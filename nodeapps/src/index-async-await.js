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

//Promise : The output of one promise will be input to another promise 

async function main() {
    getUser()
        .then(user => login(user))
        .then(status => showDashBoard(status))
        .then(page => console.log(page))
        .catch(err => console.log(err))

    try {
        const user = await getUser()
        const status = await login(user)
        const page = await showDashBoard(status)
        console.log(page)
    }
    catch (err) {
        console.log(err)
    }
}
main()
