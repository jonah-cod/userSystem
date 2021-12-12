const tasksRoutes = require('express').Router();
const { getAllTasks } = require('../controllers/tasksController')


tasksRoutes.get('/', getAllTasks);

module.exports = { tasksRoutes }