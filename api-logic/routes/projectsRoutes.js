const projectRoutes = require('express').Router();
const {
    getAllProjects,
    assignProject,
    completeProject,
    unassignProject,
    createProject,
    getUnassigned,
    getprojectAndTasks
} = require('../controllers/projectsControllers');

projectRoutes.post('/create', createProject);
projectRoutes.get('/projects', getAllProjects);
projectRoutes.get('/unassigned', getUnassigned)
projectRoutes.get('/projecttasks', getprojectAndTasks)
projectRoutes.post('/assign', assignProject);
projectRoutes.post('/unassign', unassignProject);
projectRoutes.post('/complete', completeProject)




module.exports = { projectRoutes }