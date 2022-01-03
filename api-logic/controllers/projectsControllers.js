const mssql = require('mssql');
const { config } = require('../db/config')

module.exports = {
    createProject: async(req, res) => {
        // console.log(req.body);
        let {
            ProjectId,
            title,
            p_description,
            start_Date,
            endDate
        } = req.body;
        try {
            await mssql.connect(config).then(pool => {
                if (pool.connected) {
                    pool.request()
                        .input('ProjectId', mssql.VarChar(250), ProjectId)
                        .input('title', mssql.VarChar(150), title)
                        .input('p_description', mssql.VarChar(250), p_description)
                        .input('startDate', mssql.Date, start_Date)
                        .input('endDate', mssql.Date, endDate)
                        .input('statementType', mssql.VarChar(20), 'insert')
                        .execute('projectsallinsertupdatedelete')
                        .then((result, error) => {
                            if (error) return console.log(error);
                            if (result.rowsAffected[0] === 1) {
                                res.send('success')
                            }

                        })
                }


            })
        } catch (error) {
            console.log(error.message);
        }


    },
    getAllProjects: async(req, res) => {
        await mssql.connect(config).then(pool => {
            if (pool.connected) {
                pool.request()
                    .input('statementType', mssql.VarChar(20), 'select')
                    .execute('projectsallinsertupdatedelete')
                    .then((results) => {
                        let projects = results.recordset

                        if (projects) {
                            res.json(projects)
                            console.log('Data has been requested & send to client')
                        }

                    })
            }
        })
    },

    getUnassigned: async(req, res) => {
        try {
            await mssql.connect(config).then(pool => {
                if (pool.connected) {
                    pool.request()
                        .input('statementType', mssql.VarChar(20), 'selectUnassigned')
                        .execute('projectsallinsertupdatedelete')
                        .then((results) => {
                            let projects = results.recordset
                            console.log(projects);
                            if (projects) return res.json(projects)
                            res.send('no records')
                        })
                }
            })
        } catch (error) {

        }
    },

    assignProject: async(req, res) => {
        let { projectId, userId } = req.body;
        try {
            await mssql.connect(config).then(pool => {
                if (pool.connecting)(console.log('connecting to the database'))
                if (pool.connected) {
                    pool.request()
                        .input('ProjectId', mssql.VarChar(250), projectId)
                        .input('user_id', mssql.VarChar(50), userId)
                        .input('statementType', mssql.VarChar(20), 'insert')
                        .execute('projectsAssigning')
                        .then(result => {
                            if (result.rowsAffected) {
                                res.send('success')
                            }
                        })
                }
            })
        } catch (error) {
            console.log(error.message);
        }


    },

    completeProject: async(req, res) => {
        let { ProjectId } = req.query;
        console.log(ProjectId);
        try {
            await mssql.connect(config).then(pool => {
                if (pool.connected) {
                    pool.request()
                        .input('projectId', mssql.VarChar(250), ProjectId)
                        .input('statementType', mssql.VarChar(20), 'complete')
                        .execute('projectsAssigning')
                        .then(result => {
                            if (result.rowsAffected) {
                                res.send('success')
                            }
                        })
                }
            })
        } catch (error) {
            console.log(error.message);
        }
    },

    unassignProject: async(req, res) => {
        let { userId } = req.body;
        try {
            await mssql.connect(config).then(pool => {
                if (pool.connected) {
                    pool.request()
                        .input('user_id', mssql.VarChar(50), userId)
                        .input('statementType', mssql.VarChar(20), 'unassign')
                        .execute('projectsAssigning')
                        .then(result => {
                            if (result.rowsAffected) {
                                res.send('success')
                            }

                        })
                }
            })
        } catch (error) {

        }

    },

    getprojectAndTasks: async(req, res) => {
        let { id } = req.query;


        await mssql.connect(config).then(pool => {
            if (pool.connected) {
                pool.request()
                    .input('user_id', mssql.VarChar(250), id)
                    .input('statementType', mssql.VarChar(20), 'projecttasks')
                    .execute('projectsAssigning')
                    .then(result => {

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
                        } else {
                            res.send('no data')
                        }

                    })

            }
        })
    },

    deleteproject: async(req, res) => {
        let { ProjectId } = req.body;
        console.log(req.body);
        try {
            await mssql.connect(config).then(pool => {
                if (pool.connect) {
                    pool.request()
                        .input('statementType', 'Delete')
                        .input('projectId', ProjectId)
                        .execute('projectsallinsertupdatedelete')
                        .then(res => console.log(res))
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
}