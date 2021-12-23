USE usersData;
GO


CREATE OR ALTER PROCEDURE projectsAssigning
                    (@projectId VARCHAR(250) = '',
                    @user_id VARCHAR(50) = '',
                    @statementType VARCHAR(20)
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

        IF @statementType = 'complete'
            BEGIN
                UPDATE projects
                    SET isComplete = 1
                    WHERE projectId = @projectId

                INSERT INTO completedProjects
                    SELECT *
                        FROM assignedProjects
                        WHERE projectId = @projectId

                DELETE assignedProjects
                WHERE projectId = @projectId
                
               
                        
        END

        IF @statementType = 'projecttasks'
        BEGIN
          SELECT *
            FROM projects p
              LEFT JOIN assignedProjects ap ON ap.projectId = p.projectId
              INNER JOIN tasks t ON ap.projectId = t.FK_projectId
              INNER JOIN users u ON ap.user_id = u.id
              WHERE ap.user_id = @user_id
              
        END

    END

EXEC projectsAssigning @user_id = 2, @statementType = 'projecttasks'

select *
    from completedProjects

INSERT INTO assignedProjects
            VALUES(20, 2)
    -- (taskid,
    -- FK_projectId,
    -- assignedTo)
    -- VALUES(
    --     100,
    --     20,
    --     2
    -- )