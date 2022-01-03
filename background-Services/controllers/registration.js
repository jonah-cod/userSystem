const { config } = require('../config/config')
const mssql = require('mssql')
const { welcome } = require('../messages/messages')
const sendmail = require('../helpers/mailSender')

module.exports = {
    regEmail: async() => {
        mssql.connect(config).then(pool => {
            if (pool.connected) {
                pool.query('select * from users where isSent = 0')
                    .then(result => {
                        let { recordset } = result.
                        recordset.map(async record => {
                            let recipient = { address: record.id, name: record.full_name }
                            try {
                                let message = welcome(recipient)
                                await sendmail(message).then(res => {
                                    if (res.accepted.length) {
                                        pool.query(`UPDATE users SET isSent = 1 WHERE id = '${record.id}'`)
                                    }
                                })
                            } catch (error) {
                                console.log(error.message);
                            }

                        })

                    })
            }
        })
    }
}