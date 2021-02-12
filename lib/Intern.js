// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee{
    constructor(school){

        super("John2", 1, "john@email.com");
        
        this.school = school;
    }

    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}


const intern = new Intern("Rutgers");
// console.log(intern.name);
module.exports = Intern;