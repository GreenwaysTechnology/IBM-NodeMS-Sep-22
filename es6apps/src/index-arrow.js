//arrow function

//es 5 anonmous style function 
let greet = function () {
    console.log('greet')
}
//es 6 arrow functions 
greet()
greet = () => {
    console.log('greet')
}
greet()
//////////////////////////////////////////////////////////////////////////////////

let add = function (a = 0, b = 0) {
    return a + b
}
console.log(add(10, 10))

add = (a = 0, b = 0) => {
    return a + b
}
console.log(add(10, 10))

//if function is having only return statement : remove {} and return statement
add = (a = 0, b = 0) => a + b
console.log(add(10, 10))

//single parameter without default value ,we can remove ()

let stock = value => value
console.log(stock(10))

