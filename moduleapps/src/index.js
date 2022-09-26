import { firstName, lastName, salary } from "./util/mylib.js";
import CustomerService from './services/customer.service.js'

console.log(firstName, lastName, salary)
let custService = new CustomerService()
console.log(custService.findAll())