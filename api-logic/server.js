const express = require('express');
require('dotenv').config();
const cors = require('cors')
const { projectRoutes } = require('./routes/projectsRoutes');
const { tasksRoutes } = require('./routes/tasksRoutes')


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/projects', projectRoutes);
app.use('/tasks', tasksRoutes);



const port = process.env.PORT;
app.listen(port, () => console.log(`project/tasks server running on port: ${port}`))