    DROP DATABASE IF EXISTS employee_manager_db;

    CREATE DATABASE employee_manager_db;

    USE employee_manager_db;

    CREATE TABLE department (
        depName VARCHAR(30) NOT NULL ,
        id INTEGER NOT NULL AUTO_INCREMENT,
        PRIMARY KEY (id)
    );

    CREATE TABLE role (
        id INTEGER NOT NULL AUTO_INCREMENT,
        title VARCHAR(30) NOT NULL,
        salary DECIMAL (7,2) NOT NULL,
        department_id INTEGER NOT NULL,
        PRIMARY KEY (id)
    );

    CREATE TABLE employee (
        id INTEGER NOT NULL AUTO_INCREMENT,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INTEGER NOT NULL,
        PRIMARY KEY (id)
    );