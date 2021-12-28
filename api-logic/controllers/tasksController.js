const { config } = require('../db/config');
const mssql = require('mssql');

module.exports = {
    getAllTasks: async(req, res) => {
        try {
            await mssql.connect(config).then(pool => {
                if (pool.connected) {
                    pool.request()
                        .input('statementType', mssql.VarChar(50), 'select')
                        .execute('tasksSP').then(result => {
                            let data = result.recordset;
                            console.log(data);
                            if (data) return res.json(data)
                            res.send('no records')
                        })
                }
            })
        } catch (error) {
            console.log(error.message);
        }

    },

    getTasksForproject: async(req, res) => {
        let { id } = req.query
        console.log(id);
        try {
            await mssql.connect(config).then(pool => {
                if (pool.connected) {
                    pool.request()
                        .input('FK_projectId', mssql.VarChar(250), id)
                        .input('statementType', mssql.VarChar(50), 'selectOnProject')
                        .execute('tasksSP').then(result => {
                            let recordse = result.recordset;

                            if (recordse.length) {

                                let { projectId, title, p_description, isComplete, startDate, endDate } = recordse[0];
                                let data = {
                                    details: {
                                        projectId: projectId[0],
                                        title,
                                        p_description,
                                        isComplete,
                                        startDate: startDate[0],
                                        endDate: endDate[0],
                                    },
                                    tasks: []
                                }

                                recordse.map(record => {
                                    let { assignedTo, full_name, taskId, task_title, task_status, startDate, endDate } = record
                                    let task = { assignedTo, full_name, taskId, task_title, task_status, startDate: startDate[0], endDate: endDate[0] }
                                    data.tasks.push(task)
                                })
                                res.json(data)
                                console.log(data.tasks[0].startDate);
                            } else {
                                res.send('no data')
                            }
                        })
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    },

    createTask: async(req, res) => {
        let {
            taskId,
            task_title,
            startDate,
            endDate,
            FK_projectId
        } = req.body
        console.log(req.body);
        try {
            await mssql.connect(config).then(pool => {
                if (pool.connected) {
                    pool.request()
                        .input('taskId', mssql.VarChar(250), taskId)
                        .input('task_title', mssql.VarChar(50), task_title)
                        .input('startDate', mssql.Date, startDate)
                        .input('endDate', mssql.Date, endDate)
                        .input('FK_projectId', mssql.VarChar(250), FK_projectId)
                        .input('statementType', mssql.VarChar(50), 'insert')
                        .execute('tasksSP')
                        .then(result => {
                            let data = result.rowsAffected[0];
                            if (data) return res.send('success')
                        })
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    },

    assignTasks: async() => {
        let { email } = req.body
        try {
            await mssql.connect(config).then(pool => {
                if (pool.connected) {
                    pool.request()
                        .input('assignedTo', mssql.VarChar(250), email)
                        .input('statementType', mssql.VarChar(50), 'assign')
                        .execute('tasksSP').then(result => {
                            let data = result.rowsAffected[0];
                            console.log(data);
                            if (data) return res.send('success')
                        })
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    },

    unAssignTasks: async(req, res) => {
        let { taskId } = req.body
        try {
            await mssql.connect(config).then(pool => {
                if (pool.connected) {
                    pool.request()
                        .input('taskId', mssql.VarChar(250), taskId)
                        .input('statementType', mssql.VarChar(50), 'unassign')
                        .execute('tasksSP')
                        .then(result => {
                            let data = result.rowsAffected[0]
                            if (data) return res.send('success')
                        })
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    },

    deleteTask: async(req, res) => {
        let { taskId } = req.body
        try {
            await mssql.connect(config).then(pool => {
                if (pool.connected) {
                    pool.request()
                        .input('taskId', mssql.VarChar(250), taskId)
                        .input('statementType', mssql.VarChar(50), 'delete')
                        .execute('tasksSP')
                        .then(result => {
                            let data = result.rowsAffected[0]
                            if (data) return res.send('success')
                        })
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}