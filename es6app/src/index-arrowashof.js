
const connect = callback => callback('response')
connect(res => console.log(res))
///
const auth = (success, failure) => {
    //logic 
    let isValid = false
    if (isValid) {
        success('login success')
    } else {
        failure('login failed')
    }
}
auth(res => console.log(res), err => console.log(err))