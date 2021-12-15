const express = require('express');
const cron = require('node-cron');
require('dotenv').config();

const app = express();

// cron.schedule('*/10 * * * * *', async() => {
//     let now = new Date();
//     // console.log(`running every five seconds ${now.getHours()}: ${now.getMinutes()}: ${now.getSeconds()}`);
// })

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`email service running on: ${PORT}`))