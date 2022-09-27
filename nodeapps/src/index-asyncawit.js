
async function getValue() {
    return 10
}

//await keyword
async function main() {
    //read value with then and catch 
    getValue().then(value => console.log(value))
    const value = await getValue()
    console.log(value)
}
//
main()