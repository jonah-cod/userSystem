USE usersData;
GO
CREATE OR ALTER PROCEDURE tasksSP(
        @taskId VARCHAR(250) = '',
        @task_title VARCHAR(50) = '',
        @startDate DATE = '',
        @endDate DATE = '',
        @task_status VARCHAR(50) = 'unassigned',
        @FK_projectId VARCHAR(250) = '',
        @assignedTo VARCHAR(250) = '',
        @isComplete BIT = 0,
        @isDelete BIT = 0,
        @statementType VARCHAR(50) = ''
)
AS
BEGIN 
    IF @statementType = 'insert'
        BEGIN
            INSERT INTO tasks
                    (taskId,
                    task_title,
                    startDate,
                    endDate,
                    task_status,
                    FK_projectId
                    )
                    VALUES(
                        @taskId,
                        @task_title,
                        @startDate,
                        @endDate,
                        @task_status,
                        @FK_projectId
                    )
        END

        IF @statementType = 'select'
            BEGIN
                SELECT *
                    FROM tasks
            END

        IF @statementType = 'selectOne'
            BEGIN
                SELECT *
                    FROM tasks
                    WHERE taskId = @taskId
            END

        IF @statementType = 'selectOnProject'
            BEGIN
                SELECT *
                    FROM projects p 
                    LEFT JOIN tasks t ON p.projectId = t.FK_projectId
                    
                    WHERE FK_projectId = @FK_projectId
            END

        IF @statementType = 'assign'
            BEGIN
                UPDATE tasks
                    SET assignedTo = @assignedTo,
                        task_status = 'ongoing'
                    WHERE taskId = @taskId
            END

        IF @statementType = 'unassign'
            BEGIN
                UPDATE tasks
                    SET assignedTo = NULL
                    WHERE taskId = @taskId
            END

        IF @statementType = 'complete'
            BEGIN
                UPDATE tasks
                    SET isComplete = 1
                    WHERE taskId = @taskId
            END

        IF @statementType = 'delete'
            BEGIN
                UPDATE tasks
                    SET isDelete = 1
                    WHERE taskId = @taskId
            END
END

EXEC dbo.tasksSP 'qwerty123', 'northern light', '10/12/2010', '12/20/2010', 'ongoing', 20, @statementType = 'insert';

EXEC dbo.tasksSP @taskId = '552675b9-70ff-46ea-aa77-636a0295e6b8', @assignedTo = 'jonathan@gmail.com',@statementType = 'assign';


SELECT *
FROM users 
WHERE projectId = '7edef6bc-9785-453e-96ae-db1c696013ab'

DELETE tasks

DELETE users where id <> 'joseph.ndegwa@thejitu.com' OR id <> 'jonathan.mwaniki@thejitu.com'

SELECT *
FROM projects t1
LEFT JOIN assignedProjects t2 ON t2.projectId = t1.projectId
WHERE t2.projectId IS NULL