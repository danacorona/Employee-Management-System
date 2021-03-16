//Dependencies
const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');


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


    //  Add Deparment
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


    // Add Role
  const addRole = () => {
    const departments = [];
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        for (var i = 0; i <res.length; i++) {
            departments.push(res[i].depName);
        }
    });
      inquirer
        .prompt([
            {
                name: "title",
                message: "What is the title of this role?"
            },
            {
                name: "salary",
                message: "What is the salary for this role?"
            },
            {
                name: "department",
                message: "Which department does this role belong to?",
                type: 'list',
                choices: departments,
            }
        ])
        .then ((res) => {
            connection.query(`INSERT INTO role (title, salary, department_id) VALUES ("${res.title}", ${res.salary})`)
            connection.query('SELECT role.department_id, department.depName, department.id FROM role INNER JOIN department on (department.id = role.department_id')
            if (res.departments === depName) {
                connection.query(`INSERT INTO role (department_id) VALUES ("${res.department}")`)
            }
            console.log(`Added a role of ${res.title} and a salary of ${res.salary} to the ${res.department} Department!`);
            runProgram();
        })
  }

    // Add Employee
  const addEmployee = () => {
    const roles = [];
    connection.query('SELECT * FROM roles', (err, res) => {
        if (err) throw err;
        for (var i = 0; i <res.length; i++) {
            roles.push(res[i].title);
        }
    });
      inquirer
        .prompt([
            {
                name: "firstname",
                message: "What is the Employee's First Name?"
            },
            {
                name: "lastname",
                message: "What is the Employee's Last Name?"
            },
            {
                name: "role",
                message: "What is the role of this employee?",
                type: 'list',
                choices: roles
            },
        ]).then ((res) => {
            connection.query(`INSERT INTO employee (first_name, last_name) VALUES ("${res.firstname}", "${res.lastname}")`)
            console.log(`Added ${res.firstname} ${res.lastname}!`)
            runProgram();
        })
  }





    // View Department
  const viewDepartment = () => {
      connection.query('SELECT * FROM department', (err, res) => {
        if (err) throw err;
        console.table(res);
        runProgram();
      });
      
  }

    //   View Roles

  const viewRoles = () => {
      connection.query('SELECT * FROM role', (err, res) => {
          if (err) throw err;
          console.table(res);
          runProgram();
          
      })
  }

    // View Employees   

  const viewEmployees = () => {
      connection.query('SELECT * FROM employee', (err, res) => {
          if (err) throw err;
          console.table(res);
          runProgram();
      })
  }


