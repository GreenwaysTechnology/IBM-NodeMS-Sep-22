//function parameters and args:

//name is arg 
function sayHello(name) {
    console.log(`Hello ${name}`)
}
//"Subramanian" -parameter
sayHello("Subramanian")

//java script allows without passing parameter : if you dont , it would initalize to undefined
sayHello()

//es 6 default args : if args are undfined , we can assign default value 

function add(a = 0, b = 0) {
    console.log(`a ${a} b ${b}`)
    let c = a + b
    console.log(`The result is ${c}`)
}
add(10, 10)
add()