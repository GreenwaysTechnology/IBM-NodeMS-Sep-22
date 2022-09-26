//return value from the function:

function add(a = 0, b = 0) {
    return a + b //expression
}
console.log(`The Add is ${add(10, 10)}`)

function login(userName = '') {
    return; //undefined
}
console.log(login())