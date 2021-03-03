    DROP DATABASE IF EXISTS employee_manager_db;

    CREATE DATABASE employee_manager_db;

    USE employee_manager_db;

    CREATE TABLE department (
        name VARCHAR(30) NOT NULL,
        id INTEGER NOT NULL,
        PRIMARY KEY (id)
    );

    CREATE TABLE role (
        id INTEGER NOT NULL,
        title VARCHAR(30) NOT NULL,
        salary DECIMAL (5,2) NOT NULL
    );

    CREATE TABLE employee (
        id INTEGER NOT NULL,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL
    )