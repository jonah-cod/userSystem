const express = require('express');
const cron = require('node-cron');
const { regEmail } = require('./controllers/registration');
require('dotenv').config();


const app = express();

cron.schedule('*/10 * * * * *', async() => {
    regEmail()
})

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`email service running on: ${PORT}`))