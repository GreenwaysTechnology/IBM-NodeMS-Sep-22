//non blocking using timer 

//in callback style functions are passed as parameter: listner function/callback functions 

function blockMe(message){
    console.log(message)
}

function sayHello(hello) {
    //non blocking api 
    setTimeout(hello, 5000,'Hello!!')
}

blockMe('start')
sayHello(function (message) {
   console.log(message)
})
blockMe('end')