CREATE DATABASE usersData;

USE usersData;

CREATE TABLE users

(

id VARCHAR(250) PRIMARY KEY NOT NULL,

full_name VARCHAR(50),
addres VARCHAR(50),
user_role VARCHAR(50),
pass VARCHAR(250),
isDeleted BIT DEFAULT 0

)


insert into users values(1, 'Jon','Address','admin','1234',0),
                        (2, 'Mary','Address','admin','1234',0),
                        (3, 'Sam','Address','admin','1234',0),
                        (4, 'Kim','Address','admin','1234',0)





CREATE TABLE projects

(

projectId VARCHAR(250) NOT NULL UNIQUE,

title VARCHAR(50),
p_description VARCHAR(255),
isComplete BIT default 0,
isDeleted BIT default 0,
userId VARCHAR(250),

PRIMARY KEY (userId),
FOREIGN KEY (userId)
REFERENCES users(id)

)


insert into projects values

(10, 'ProjectA','desc',0,0, 1),
(20, 'ProjectB','desc',0,0, 2),
(30, 'ProjectC','desc',0,0, 3),
(40, 'ProjectD','desc',0,0, 4)


ALTER TABLE projects
 ADD startDate DATE,
    endDate DATE;







SELECT *
FROM users

SELECT full_name, title
FROM users u JOIN projects p ON u.projectId = p.projectId


 SELECT *
    from projects




CREATE TABLE tasks 
(
    taskId VARCHAR(250) PRIMARY KEY NOT NULL,
    task_title VARCHAR(250),
    startDate DATE,
    endDate DATE,
    task_status VARCHAR(50),
    FK_projectId VARCHAR(250) NOT NULL FOREIGN KEY REFERENCES projects(projectId),
    assignedTo VARCHAR(250) DEFAULT NULL FOREIGN KEY REFERENCES users (id),
    isComplete BIT DEFAULT 0,
    isDelete BIT DEFAULT 0,

)

DROP TABLE users;
DROP TABLE projects;
DROP TABLE tasks;

-- INSERT into users (id, full_name, addres, user_role, pass, isDeleted)
--         VALUES('bhjhbhgs', 'jonathan', 'kieni', 'user', 'jnhjhzfgvjhsdnch', 0);

-- SELECT * 
--     FROM users
--     WHERE isDeleted = 0;

-- DELETE from users
-- WHERE id = 'bhjhbhgs';

