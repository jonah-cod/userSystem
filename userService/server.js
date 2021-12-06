const express = require('express');
require('dotenv').config()
const router = require('./routes/user_routes')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

const port = process.env.PORT
app.listen(port, () => console.log(`server running on port: ${port}`))