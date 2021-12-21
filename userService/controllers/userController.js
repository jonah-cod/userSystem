const { encryptpass, verifypass } = require('../helpers/encrypter');
const { config } = require('../db/config');
const mssql = require('mssql');
const { genToken, verToken } = require('../helpers/authenticator');
const { getMeUser } = require('../helpers/getUser');


module.exports = {

    getUsers: async(req, res) => {
        await mssql.connect(config).then(async pool => {
            if (pool.connecting) console.log('connecting to the database...');
            await pool.request()
                .input('StatementType', mssql.VarChar(50), 'select')
                .execute('usersallinsertupdatedelete')
                .then(data => {
                    res.json(data.recordset);
                })
        })
    },

    login: async(req, res) => {
        let { email, password } = req.body;
        let thisUser = await getMeUser(email);

        if (thisUser) {
            let { id, full_name, addres, user_role } = thisUser;
            let user = { id, full_name, address: addres, user_role };
            let authed = await verifypass({ pass: password, enpass: thisUser.pass }).then((result) => {
                if (result) {
                    return (genToken(user, 'new'));
                } else {
                    res.json({ message: 'wrong password' })
                }
            });
            res.json(authed);
        } else {
            res.json({ message: 'no user found' })
        }


    },

    registerUser: async(req, res) => {

        let pass = await encryptpass(req.body.password);

        let id = req.body.email;
        let full_name = req.body.full_name;
        let address = req.body.address;
        let password = pass;


        try {
            await mssql.connect(config).then(async pool => {

                if (pool.connecting) {
                    console.log('connecting to the database');

                }

                if (pool.connected) {
                    console.log('connected to database');
                    await pool.request()
                        .input('id', mssql.VarChar(250), id)
                        .input('full_name', mssql.VarChar(250), full_name)
                        .input('addres', mssql.VarChar(250), address)
                        .input('pass', mssql.VarChar(250), password)
                        .input('StatementType', mssql.VarChar(50), 'insert')
                        .execute('usersallinsertupdatedelete')
                        .then((data) => {
                            if (data.rowsAffected) {
                                let newuser = { id, full_name, address, user_role: 'user' };
                                let type = 'new';
                                let { user, token, refresh } = genToken(newuser, type);

                                res.json({ user, token: token, refresh: refresh, message: 'success' });
                            } else {
                                res.json({ message: 'failed' })
                            }

                        });


                }
            });

        } catch (error) {
            res.json({ error: error.message.split(' ')[0] })
            console.log(error.message.split(' ')[0]);
        }

    },

    protectedRoute: async(req, res) => {
        let tokens = { token: req.headers.authorization.split(' ')[1], refresh: req.headers.authorization.split(' ')[2] };

        res.json(await verToken(tokens));
    }
};