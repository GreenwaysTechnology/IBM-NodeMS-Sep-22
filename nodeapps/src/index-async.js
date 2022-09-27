//by default async functions return promise
async function getValue() {
    return 10 // Promise.resolve(10)
}
console.log(getValue())
getValue().then(value => console.log(value))