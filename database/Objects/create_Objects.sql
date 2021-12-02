CREATE DATABASE usersData;

USE usersData;

CREATE TABLE users 
(
    id VARCHAR(250) PRIMARY KEY NOT NULL,
    full_name VARCHAR(50),
    addres VARCHAR(50),
    user_role VARCHAR(50),
    isDeleted BIT,
    FK_projectId VARCHAR(250) DEFAULT NULL FOREIGN KEY (id) 
    REFERENCES projects (projectId)
)

CREATE TABLE projects
(
    projectId VARCHAR(250) PRIMARY KEY NOT NULL,
    title VARCHAR(50),
    p_description VARCHAR(255),
    isComplete BIT default 0,
    isDeleted BIT default 0,
    
)

ALTER TABLE projects
 ADD startDate DATE,
    endDate DATE;



CREATE TABLE tasks 
(
    taskId VARCHAR(250) PRIMARY KEY NOT NULL,
    task_title VARCHAR(250),
    startDate DATE,
    endDate DATE,
    task_status VARCHAR(50),
    assignedTo VARCHAR(250) DEFAULT NULL FOREIGN KEY REFERENCES users (id),
    isComplete BIT DEFAULT 0,
    isDelete BIT DEFAULT 0,

)

-- DROP TABLE users;


