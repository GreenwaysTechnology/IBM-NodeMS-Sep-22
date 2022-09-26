//function is literal.

function sayHello() {
    return 'Hello'
}
console.log(sayHello());
//literal syntax:
let hello = sayHello;
console.log(hello())

//declaration and initalization in the same  place ...

//if function without name, is called "anonmous function"
let hai = function () {
    return 'Hai'
}
console.log(hai())

//with parameters
let add = function (a = 0, b = 0) {
    return a + b
}
console.log(`Add ${add(12,34)}`)