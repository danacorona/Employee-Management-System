const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection ({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employee_manager_db',
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id at ${connection.threadId}`);
    connection.end();
});