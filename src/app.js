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
        name: "github",
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
                this.employeeList.push(new Engineer(engineer.name, engineer.id, engineer.email, engineer.github));
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

        let content = `<!DOCTYPE html>
        <html>
        <head>
            <meta charset='utf-8'>
            <meta http-equiv='X-UA-Compatible' content='IE=edge'>
            <title>Team Profile</title>
            <meta name='viewport' content='width=device-width, initial-scale=1'>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        </head>
        
        <body>
        
            <header class="bg-danger h-25 text-center">
                <h1 class="text-light">My Team</h1>
            </header>
        
            <main class="h-75">
                <section class="d-flex flex-wrap justify-content-around p-4">`

            +
            this.generateCard(this.employeeList)
            +

            `</section>
            </main>
        </body>
        </html>`

        fs.writeFileSync("./dist/teamProfile.html", content);
    }

    generateCard(employeeList) {
        let result = ``;
        employeeList.forEach(employee => {
            console.log("inside generate Card",employee)

            if (employee instanceof Manager) {
                result += `
                <div class="card shadow-lg m-4" style="width: 18rem;">
                    <div class="bg-primary text-light pl-4 ">
                        <h2>${employee.name}</h2>
                        <h3>Manager</h3>
                    </div>
                    <div class="card-body bg-light">
                        <table class="table bg-white table-bordered">
                            <tbody>
                                <tr>
                                    <td>ID: ${employee.id}</td>
                                </tr>
                                <tr>
                                    <td>Email: <a href="${employee.email}">${employee.email}</a></td>
                                </tr>
                                <tr>
                                    <td>Office number: ${employee.officeNumber}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>`;
            } else if (employee instanceof Engineer) {
                result += `
                <div class="card shadow-lg m-4" style="width: 18rem;">
                    <div class="bg-primary text-light pl-4 ">
                        <h2>${employee.name}</h2>
                        <h3>Engineer</h3>
                    </div>
                    <div class="card-body bg-light">
                        <table class="table bg-white table-bordered">
                            <tbody>
                                <tr>
                                    <td>ID: ${employee.id}</td>
                                </tr>
                                <tr>
                                    <td>Email: <a href="${employee.email}">${employee.email}</a></td>
                                </tr>
                                <tr>
                                    <td>Github: <a href="https://github.com/${employee.github}">${employee.github}</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>`;
            } else {
                result += `
                <div class="card shadow-lg m-4" style="width: 18rem;">
                    <div class="bg-primary text-light pl-4 ">
                        <h2>${employee.name}</h2>
                        <h3>Intern</h3>
                    </div>
                    <div class="card-body bg-light">
                        <table class="table bg-white table-bordered">
                            <tbody>
                                <tr>
                                    <td>ID: ${employee.id}</td>
                                </tr>
                                <tr>
                                    <td>Email: <a href="${employee.email}">${employee.email}</a></td>
                                </tr>
                                <tr>
                                    <td>School: ${employee.school}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>`;
            }
        });
        return result;
    }

}



module.exports = App;