const jwt = require('jsonwebtoken');
let secret = process.env.SECRET_KEY;
const { getMeUser } = require('./getUser')


const genToken = (user, type) => {
    if (type === 'refresh') return jwt.sign({ user }, secret, { expiresIn: "24h" })

    return { user: user, token: jwt.sign({ user }, secret, { expiresIn: "24h" }), refresh: genRefToken(user.id), message: 'success' }

}

const verToken = async(tokens) => {
    let { token, refresh } = tokens;
    try {
        let user = jwt.verify(token, secret)
        console.log('it was valid');
        return {...user, token, refresh, message: 'success' }
    } catch (error) {
        if (error.message === 'jwt expired') {
            // console.log(error.message)
            let { id, full_name, addres, user_role } = await verRefToken(refresh)
            let user = { id, full_name, address: addres, user_role }
            return { user: user, token: genToken(user, "refresh"), refresh, message: 'success' }
        }

        return 'invalid'

    }
}

const genRefToken = (id) => {
    let refresh = jwt.sign({ id }, secret, { expiresIn: "7d" })

    return refresh
}

const verRefToken = async(refresh) => {
    try {

        let idObject = jwt.verify(refresh, secret);
        let user = await getMeUser(idObject.id)
        return user;


    } catch (error) {
        console.log(error);
        return 'invalid'
    }
}



exports.genToken = genToken;
exports.verToken = verToken;