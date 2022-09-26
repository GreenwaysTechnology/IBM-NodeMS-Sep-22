
function connect(callback) {
    callback('response')
}
connect(function (res) {
    console.log(res)
})
///
function auth(success, failure) {
    //logic 
    let isValid = false
    if (isValid) {
        success('login success')
    } else {
        failure('login failed')
    }
}
auth(function (res) {
    console.log(res)
}, function (err) {
    console.log(err)
})