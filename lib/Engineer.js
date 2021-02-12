// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");

class Engineer extends Employee{
    constructor(gitHubUser){
        this.gitHubUser = gitHubUser;
    }

    getGithub(){
        return this.gitHubUser;
    }
    getRole(){
        return "Engineer";
    }
}

module.exports = Employee;