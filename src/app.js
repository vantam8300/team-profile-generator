const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");

// questions to get manager's information
const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is manager's name?"
    },

    {
        type: "input",
        name: "id",
        message: "What is manager's ID?"
    },

    {
        type: "input",
        name: "email",
        message: "What is manager's email?"
    },

    {
        type: "input",
        name: "officeNumber",
        message: "What is manager's office number?"
    },

    {
        type: "list",
        name: "action",
        message: "Add an engineer or an intern or to finish building team",
        choices: [
            "Adding Engineer",
            "Adding Intern",
            "Done"
        ]
    }
]
// questions to get engineer's information
const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is engineer's name?"
    },

    {
        type: "input",
        name: "id",
        message: "What is engineer's ID?"
    },

    {
        type: "input",
        name: "email",
        message: "What is engineer's email?"
    },

    {
        type: "input",
        name: "username",
        message: "What is engineer's Github username?"
    },

    {
        type: "list",
        name: "action",
        message: "Add an engineer or an intern or to finish building team",
        choices: [
            "Adding Engineer",
            "Adding Intern",
            "Done"
        ]
    }
]

// questions to get Intern's information
const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is intern's name?"
    },

    {
        type: "input",
        name: "id",
        message: "What is intern's ID?"
    },

    {
        type: "input",
        name: "email",
        message: "What is intern's email?"
    },

    {
        type: "input",
        name: "school",
        message: "What is intern's school?"
    },

    {
        type: "list",
        name: "action",
        message: "Add an engineer or an intern or to finish building team",
        choices: [
            "Adding Engineer",
            "Adding Intern",
            "Done"
        ]
    }
]


class App {

    constructor() {
        this.employeeList = [];
    }

    async start() {
        const manager = await inquirer.prompt(managerQuestions)
        this.employeeList.push(new Manager(manager.name, manager.id, manager.email, manager.officeNumber))
        let nextAction = manager.action;
    
        // user want to add engineer or intern
        while (nextAction !== "Done") {
    
            if (nextAction === "Adding Engineer") {
    
                // prompt user for engineer information
                const engineer = await inquirer.prompt(engineerQuestions)
                this.employeeList.push(new Engineer(engineer.name, engineer.id, engineer.email, engineer.username));
                nextAction = engineer.action;
    
            } else {
    
                // prompt user for intern information
                const intern = await inquirer.prompt(internQuestions)
                this.employeeList.push(new Intern(intern.name, intern.id, intern.email, intern.school));
                nextAction = intern.action;
            }
        }
    
        // user want to finish building the team information
        console.log("Your team profile has been generated!");

        this.generateFile();
    }

    generateFile() {  
        
    }

}


module.exports = App;