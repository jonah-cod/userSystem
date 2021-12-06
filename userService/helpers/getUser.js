const { config } = require('../db/config')
const mssql = require('mssql')
module.exports = {
    getMeUser: async(id) => {
        return new Promise((resolve) => mssql.connect(config).then(pool => {
            if (pool.connecting) return console.log('database connecting');

            if (pool.connected) return (pool.request()
                .input('id', mssql.VarChar(250), id)
                .input('StatementType', mssql.VarChar(50), 'selectOne')
                .execute('usersallinsertupdatedelete')
                .then(data => resolve(data.recordset[0])))



        }))

    }
}