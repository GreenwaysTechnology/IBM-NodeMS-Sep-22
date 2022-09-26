//constructor parameters
function Employee(id = 1, name = 'Subramanain') {
    //instance variables
    this.id = id;
    this.name = name;
    //instance methods
    this.calculateSalary = function () {
        return 1000;
    }
}
//create object 
//emp is just reference variable
//new is operator
//Employee() is constructor call 
let emp = new Employee()
console.log(`id ${emp.id} Name ${emp.name} Salary ${emp.calculateSalary()}`)

emp = new Employee(23,'Karthik')
console.log(`id ${emp.id} Name ${emp.name} Salary ${emp.calculateSalary()}`)