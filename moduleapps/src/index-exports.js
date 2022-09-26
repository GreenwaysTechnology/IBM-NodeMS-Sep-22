//access the code from the myutil.js 
const res = require('./util/myutil')
console.log(res)

console.log(`${res.firstName} ${res.lastName} ${res.address.city} ${res.salary}`)
console.log(`${res.skills} ${res.status} ${res.saySomething()}`)
