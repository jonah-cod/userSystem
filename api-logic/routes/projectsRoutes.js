const projectRoutes = require('express').Router();
const {
    getAllProjects,
    assignProject,
    completeProject,
    unassignProject
} = require('../controllers/projectsControllers');

projectRoutes.post('/projects/create', )
projectRoutes.get('/projects', getAllProjects);
projectRoutes.post('projects/assign', assignProject);
projectRoutes.post('projects/unassign', unassignProject);
projectRoutes.post('projects/complete', completeProject)




module.exports = { projectRoutes }