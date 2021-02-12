// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(github){

        super("John1", 1, "john@email.com");
        
        this.github = github;
    }

    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}


const engineer = new Engineer("GitHubUser");
console.log(engineer.name);
module.exports = Engineer;