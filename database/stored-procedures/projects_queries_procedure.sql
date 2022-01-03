USE usersData;
GO

CREATE OR ALTER PROCEDURE projectsallinsertupdatedelete (@projectId   VARCHAR(250) = '',
                                          @title   VARCHAR(100) = '',
                                          @p_description     VARCHAR(250) = '',
                                          @startDate DATE = '',
                                          @endDate DATE = '',
                                          @isComplete        Bit = 0,
                                          @isDeleted      BIT = 0,
                                          @StatementType VARCHAR(20) = '')
AS
  BEGIN
      IF @StatementType = 'Insert'
        BEGIN
            INSERT INTO projects
                        (projectId,
                         title,
                         p_description,
                         startDate,
                         endDate,
                         isComplete,
                         isDeleted)
            VALUES     ( @projectId,
                         @title,
                         @p_description,
                         @startDate,
                         @endDate,
                         @isComplete,
                         @isDeleted)
        END

      IF @StatementType = 'Select'
        BEGIN
            SELECT *
            FROM   projects
            WHERE isDEleted = 0 AND isComplete = 0
        END

        IF @StatementType = 'SelectOne'
         BEGIN
            SELECT *
            FROM projects
            WHERE projectId = @projectId
         END

      IF @statementType = 'selectUnassigned'
        BEGIN
          SELECT t1.projectId, title, p_description, startDate, endDate
            FROM projects t1
            LEFT JOIN assignedProjects t2 ON t2.projectId = t1.projectId
            WHERE t2.projectId IS NULL AND t1.isComplete = 0
        END

      
      IF @StatementType = 'Update'
        BEGIN
            UPDATE projects
            SET    title = @title,
                         p_description = @p_description,
                         startDate = @startDate,
                         endDate = @endDate
                         
            WHERE  projectId = @projectId
        END
      ELSE IF @StatementType = 'Delete'
        BEGIN
            UPDATE projects
             SET   isDeleted = 1
            WHERE  projectId = @projectId
        END
  END




  UPDATE projects
    SET isComplete = 0
    WHERE projectId = '20'

  SELECT *
    FROM assignedProjects

  SELECT *
    FROM completedProjects
    
  SELECT *
    FROM users

  UPDATE users
    set user_role = 'admin'
    WHERE id = 'jonathan@gmail.com'
  
DELETE assignedProjects WHERE user_id = 'dancan.kipgetich@thejitu.com'