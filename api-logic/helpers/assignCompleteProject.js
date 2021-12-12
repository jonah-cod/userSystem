const {} = require('../db/config')
const mssql = require('mssql');
const config = require('../db/config');

module.exports = {
    assignComplete: async(newdata) => {
        let { data, query } = newdata;
        let { projectId, user_id } = data;

        await mssql.connect(config).then(async pool => {
            if (pool.connecting) return console.log('database connecting');

            if (query === 'insert') {
                try {
                    pool.request()
                        .input('projectId', mssql.VarChar, projectId)
                        .input('user_id', mssql.VarChar, user_id)
                        .input('query', mssql.VarChar, query)
                        .execute('projectsAssigning')
                } catch (error) {
                    console.log(error.message);
                }
            } else if (query === 'delete') {
                try {
                    pool.request()
                        .input('projectId', mssql.VarChar, projectId)
                        .input('query', mssql.VarChar, query)
                        .execute('projectsAssigning')
                } catch (error) {
                    console.log(error.message);
                }
            } else {
                try {
                    pool.request()
                        .input('user_id', mssql.VarChar, user_id)
                        .input('query', mssql.VarChar, query)
                        .execute('projectsAssigning')
                } catch (error) {
                    console.log(error.message);
                }
            }



        }).catch(error => console.log(error.message))

    }
}