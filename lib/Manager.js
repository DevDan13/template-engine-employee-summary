// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee{
    constructor(officeNumber){

        super("John2", 1, "john@email.com");
        
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager";
    }
}


const manager = new Manager(55);
// console.log(intern.name);
module.exports = Manager;