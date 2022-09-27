//non blocking using timer 

//in callback style functions are passed as parameter: listner function/callback functions 

function blockMe(message){
    console.log(message)
}

function sayHello(hello) {
    //non blocking api 
    setTimeout(hello, 5000)
}

blockMe('start')
sayHello(function () {
   console.log('hello')
})
blockMe('end')