const projectRoutes = require('express').Router();
const {
    getAllProjects,
    assignProject,
    completeProject,
    unassignProject,
    createProject,
    getUnassigned
} = require('../controllers/projectsControllers');

projectRoutes.post('/create', createProject);
projectRoutes.get('/projects', getAllProjects);
projectRoutes.get('/unassigned', getUnassigned)
projectRoutes.post('/assign', assignProject);
projectRoutes.post('/unassign', unassignProject);
projectRoutes.post('/complete', completeProject)




module.exports = { projectRoutes }