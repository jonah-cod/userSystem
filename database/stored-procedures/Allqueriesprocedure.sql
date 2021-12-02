USE usersData;
GO

CREATE PROCEDURE allinsertupdatedelete (@id            INTEGER,
                                          @full_name    VARCHAR(50),
                                          @addres     VARCHAR(50),
                                          @pass        VARCHAR(255),
                                          @user_role    VARCHAR(20) = 'user',
                                          @isDelete      BIT = 0,
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
                         isDelete)
            VALUES     ( @id,
                         @full_name,
                         @addres,
                         @user_role,
                         @pass,
                         @isDelete)
        END

      IF @StatementType = 'Select'
        BEGIN
            SELECT *
            FROM   users
            WHERE isDElete = 0
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
             SET   isDelete = 1
            WHERE  id = @id
        END
  END