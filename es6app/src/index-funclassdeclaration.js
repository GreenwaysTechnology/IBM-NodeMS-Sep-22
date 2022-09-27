//create object : using functtions:

//es 5 style class declaration : using functions 

function Employee() {
    //instance variables
    this.id = 1
    this.name = 'Subramanian'
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