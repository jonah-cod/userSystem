const { getMeUser } = require('../helpers/getUser')

module.exports = {
    validate: (req, res, next) => {

        let { password, Cpassword } = req.body;
        password = password.trim();
        Cpassword = Cpassword.trim();
        if (password === Cpassword && password !== undefined && password !== '') {

            if (password.length < 8) return res.json({ error: 'passwords should have atleast 8 characters' })

            if (!/\d/.test(password)) return res.json({ error: 'passwords should contain a number' })
            if (!/[a-z]/.test(password)) return res.json({ error: 'passwords should contain small letters' })
            if (!/[A-Z]/.test(password)) return res.json({ error: 'passwords should contain capital letters' })
            if (!/[^A-Za-z0-9]/g.test(password)) return res.json({ error: 'passwords should contain special characters' })

        } else {
            return res.json({ error: 'passwords must match and they can\'t be empty!' })
        }

        return next();
    },

    isHeanAdmin: async(req, res, next) => {
        let id = req.body.id;
        console.log(id);
        let user = await getMeUser(id);

        if (user) {
            let role = user.user_role;
            if (role === 'admin') { next() } else { return res.status(401).send('unauthorised') }
        } else {
            res.status(400).send('account doesn\'t exist')
        }


    }

}