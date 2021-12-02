USE usersData;
GO

CREATE PROCEDURE projectsallinsertupdatedelete (@projectId            INTEGER,
                                          @title   VARCHAR(50),
                                          @p_description     VARCHAR(50),
                                          @startDate DATE,
                                          @endDate DATE,
                                          @isComplete        Bit = 0,
                                          @isDeleted      BIT = 0,
                                          @StatementType NVARCHAR(20) = '')
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
            WHERE isDEleted = 0
        END

        IF @StatementType = 'SelectOne'
         BEGIN
            SELECT *
            FROM projects
            WHERE projectId = @projectId
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