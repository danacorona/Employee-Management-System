//Dependencies
const inquirer = require('inquirer');
const mysql = require('mysql');


const connection = mysql.createConnection ({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employee_manager_db',
});

// lets us know if there was an error with connection
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    runProgram();
  });



  const runProgram = () => {
      inquirer
        .prompt([
            {
                name: "programChoices",
                type: "list",
                message: "What would you like to do?",
                choices: [
                    "Add Department", "Add Role", "Add Employee",
                    "View Departments", "View Roles", "View Employees",
                    "Update Roles"
                ]
            }
        ]).then((res) => {
            switch (res.programChoices) {
                case 'Add Department':
                    addDepartment();
                    break;

                case 'Add Role':
                    addRole();
                    break;

                case 'Add Employee':
                    addEmployee();
                    break;

                case 'View Departments':
                    viewDepartment();
                    break;

                case 'View Roles':
                    viewRoles();
                    break;

                case 'View Employees':
                    viewEmployees();
                    break;

                case 'Update Roles':
                    updateRoles();
                    break;

                default:
                    console.log(`Invalid action: ${res.programChoices}`)
                    break;
            }
        })
  }


    //Add Functions
  const addDepartment = () => {
    inquirer
        .prompt ([
            {
                name: "departmentName",
                message: "What is the Department Name?",
            },
        ]).then((res) => {   
            connection.query(`INSERT INTO department (depName) VALUES ("${res.departmentName}")`)
            console.log(`You have successfully added a department named ${res.departmentName}!`);
            runProgram();
        })
    }

  const addRole = () => {
      inquirer
        .prompt([
            {
                name: "title",
                message: "What is the title of this role?"
            },
            {
                name: "salary",
                message: "What is the salary for this role?"
            }
        ]).then ((res) => {
            connection.query(`INSERT INTO role (title, salary) VALUES ("${res.title}", ${res.salary})`)
            console.log(`Added a role of ${res.title} and a salary of ${res.salary}!`);
            runProgram();
        })
  }

  const addEmployee = () => {
      inquirer
        .prompt([
            {
                name: "firstname",
                message: "What is the Employee's First Name?"
            },
            {
                name: "lastname",
                message: "What is the Employee's Last Name?"
            }
        ]).then ((res) => {
            connection.query(`INSERT INTO employee (first_name, last_name) VALUES ("${res.firstname}", "${res.lastname}")`)
            console.log(`Added ${res.firstname} ${res.lastname}!`)
            runProgram();
        })
  }





  // View Functions (all) -- Bonus (Managers & combined salary)
  const viewDepartment = () => {
      
  }


  // Update Functions (roles) -- Bonus (Managers)


  //Bonus Delete Functions


  //End Connection

