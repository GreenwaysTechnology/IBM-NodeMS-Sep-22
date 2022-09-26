
function add(a, b) {
    console.log(`${a} ${b} ${a + b}`)
}
add(10, 10) //values are passed directly
let x = 10
let y = 20
add(x, y) //values are passed with help of variables


//higher order functions
//function as parameter .

function sayHello(hello) {
    //invoke  function 
    hello()
}

//function with variables
let hello = function () {
    console.log('Hello')
}
sayHello(hello)
sayHello(function () {
    console.log('hello')
})
/////////////////////////////////////////////////////////////////////////////////////




































