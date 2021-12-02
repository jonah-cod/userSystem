const { encryptpass, verifypass } = require('../helpers/encrypter')


function getUsers(req, res) {

}

function login(req, res) {

}

function registerUser(req, res) {

    let pass = await encryptpass(req.body.password);

    let user = {

    }

    res.send("I got hit!")
}


module.exports = { getUsers, login, registerUser }