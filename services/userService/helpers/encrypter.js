const bcrypt = require('bcrypt')
require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = {

    encryptpass: async(pass) => {

        return await bcrypt.hash(pass, 10)

    },

    verifypass: async(data) => {
        let { pass, enpass } = data;
        return await bcrypt.compare(pass, enpass)
    },

    genToken: (user) => {
        let secret = process.env.SECRET_KEY;

    }
}