const tasksRoutes = require('express').Router();
const {
    getAllTasks,
    getTasksForproject,
    createTask,
    assignTasks,
    unAssignTasks,
    deleteTask
} = require('../controllers/tasksController')


tasksRoutes.get('/', getAllTasks);
tasksRoutes.get('/tasks', getTasksForproject);
tasksRoutes.post('/create', createTask)
tasksRoutes.post('/assign', assignTasks)
tasksRoutes.post('/unAssign', unAssignTasks)
tasksRoutes.post('/delete', deleteTask)


module.exports = { tasksRoutes }