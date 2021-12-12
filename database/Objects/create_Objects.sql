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
GO

-- test data
-- insert into users values(1, 'Jon','Address','admin','1234',0),
--                         (2, 'Mary','Address','admin','1234',0),
--                         (3, 'Sam','Address','admin','1234',0),
--                         (4, 'Kim','Address','admin','1234',0)





CREATE TABLE projects

(
    projectId VARCHAR(250) NOT NULL UNIQUE,
    title VARCHAR(50),
    p_description VARCHAR(255),
    isComplete BIT default 0,
    isDeleted BIT default 0,
    PRIMARY KEY (projectId),
)
GO

-- test data 
-- insert into projects 
--     values  (10, 'ProjectA','desc',0,0),
--             (20, 'ProjectB','desc',0,0),
--             (30, 'ProjectC','desc',0,0),
--             (40, 'ProjectD','desc',0,0)


ALTER TABLE projects
 ADD startDate DATE,
    endDate DATE;

CREATE TABLE assignedProjects 
(
    projectId VARCHAR(250) FOREIGN KEY 
    REFERENCES projects (projectId)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,

    user_id VARCHAR(250) UNIQUE FOREIGN KEY 
    REFERENCES users (id)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
)
GO

-- testing queries

-- INSERT INTO assignedProjects 
--     VALUES (20, 2);

-- SELECT p.projectId, p.title, p.startDate, a.user_id
--     FROM projects p
--     LEFT JOIN assignedProjects a ON a.projectId = p.projectId
    
-- DELETE assignedProjects
--     WHERE user_id = 2




-- SELECT *
-- FROM users

--  SELECT *
--     from projects

--  SELECT *
--     from assignedProjects


CREATE TABLE tasks 
(
    taskId VARCHAR(250) PRIMARY KEY NOT NULL,
    task_title VARCHAR(250),
    startDate DATE,
    endDate DATE,
    task_status VARCHAR(50),
    FK_projectId VARCHAR(250) NOT NULL 
    FOREIGN KEY REFERENCES projects(projectId)
    ON DELETE NO ACTION,
    assignedTo VARCHAR(250) DEFAULT NULL 
    FOREIGN KEY REFERENCES users (id)
    ON DELETE NO ACTION,
    isComplete BIT DEFAULT 0,
    isDelete BIT DEFAULT 0,

)
GO

-- testing data

-- DROP TABLE users;
-- DROP TABLE projects;
-- DROP TABLE tasks;
-- DROP TABLE assignedProjects

-- UPDATE users 
--     SET user_role = 'admin'
--     WHERE id = 'jonnig6@gmail.com';
-- GO

-- DELETE users
--      WHERE user_role != 'admin'


-- INSERT into users (id, full_name, addres, user_role, pass, isDeleted)
--         VALUES('bhjhbhgs', 'jonathan', 'kieni', 'user', 'jnhjhzfgvjhsdnch', 0);

-- SELECT * 
--     FROM users
--     WHERE isDeleted = 0;

-- DELETE from users
-- WHERE id = 'bhjhbhgs';

