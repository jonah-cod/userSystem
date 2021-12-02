USE usersData;
GO

CREATE PROCEDURE usersallinsertupdatedelete (@id            INTEGER,
                                          @full_name    VARCHAR(50),
                                          @addres     VARCHAR(50),
                                          @pass        VARCHAR(255),
                                          @user_role    VARCHAR(20) = 'user',
                                          @isDeleted      BIT = 0,
                                          @StatementType NVARCHAR(20) = '')
AS
  BEGIN
      IF @StatementType = 'Insert'
        BEGIN
            INSERT INTO users
                        (id,
                         full_name,
                         addres,
                         user_role,
                         pass,
                         isDeleted)
            VALUES     ( @id,
                         @full_name,
                         @addres,
                         @user_role,
                         @pass,
                         @isDeleted)
        END

      IF @StatementType = 'Select'
        BEGIN
            SELECT *
            FROM   users
            WHERE isDEleted = 0
        END

        IF @StatementType = 'SelectOne'
         BEGIN
            SELECT *
            FROM users
            WHERE id = @id
         END

      IF @StatementType = 'Update'
        BEGIN
            UPDATE users
            SET    full_name = @full_name,
                   addres = @addres
            WHERE  id = @id
        END
      ELSE IF @StatementType = 'Delete'
        BEGIN
            UPDATE users
             SET   isDeleted = 1
            WHERE  id = @id
        END
  END

  -- DROP PROCEDURE allinsertupdatedelete;
