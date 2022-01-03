const mailer = require('nodemailer');
require('dotenv').config();

let PASS = process.env.PASS
const transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jonatskin@gmail.com',
        pass: PASS
    }
});

function sendmail(message) {

    // await transporter.sendMail(message)
    return new Promise((resolve, reject) => {
        try {
            transporter.sendMail(message, (err, info) => {
                if (err)(reject(err.message))
                resolve(info)

            })
        } catch (error) {
            console.log(error.message);
        }
    })

}

module.exports = sendmail