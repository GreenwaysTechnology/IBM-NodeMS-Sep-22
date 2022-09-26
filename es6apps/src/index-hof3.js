//how to return function from another function 

function counter() {
    return function () {
        return 0
    }
}
const inc = counter()
console.log(inc())

//short cut 
console.log(counter()())

//
let like = function () {
    return function () {
        return 100
    }
}
console.log(like()())
like = () => {
    return () => {
        return 100
    }
}
console.log(like()())
like = () => () => 100
console.log(like()())
