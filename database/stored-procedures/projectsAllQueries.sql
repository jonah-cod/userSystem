USE usersData;
GO


CREATE OR ALTER PROCEDURE projectsAssigning
                    (@projectId VARCHAR(250),
                    @user_id VARCHAR(50) = '',
                    @statementType VARCHAR(50)
                    )
    AS
    BEGIN 
        IF @statementType = 'insert'
            BEGIN
                INSERT INTO assignedProjects
                    (
                        projectId,
                        user_id
                    )

                    VALUES (
                        @projectId,
                        @user_id
                    )
            END

        IF @statementType = 'unassign'
            BEGIN 
                DELETE assignedProjects
                WHERE user_id = @user_id
            END 

        IF @statementType = 'delete'
            BEGIN
                UPDATE projects
                    SET isCompleted = 1;
                    WHERE projectId = @projectId
                    
                INSERT INTO completedProjects
                    SELECT *
                        FROM assignedProjects
                        WHERE projectId = @projectId

                DELETE assignedProjects
                WHERE projectId = @projectId
            END
    END

EXEC projectsAssigning 20, 2, 'unassign'