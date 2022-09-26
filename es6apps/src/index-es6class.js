class Employee {
    constructor(id = 1, name = 'Subramanain') {
        //instance variables
        this.id = id;
        this.name = name;
    }
    //instance methods
    calculateSalary() {
        return 1000;
    }
}
//create object 
//emp is just reference variable
//new is operator
//Employee() is constructor call 
let emp = new Employee()
console.log(`id ${emp.id} Name ${emp.name} Salary ${emp.calculateSalary()}`)

emp = new Employee(23, 'Karthik')
console.log(`id ${emp.id} Name ${emp.name} Salary ${emp.calculateSalary()}`)