module.exports = {
    validate: (req, res, next) => {
        let errors = []
        let { password, Cpassword } = req.body;
        password = password.trim();
        Cpassword = Cpassword.trim();
        if (password === Cpassword && password !== undefined && password !== "") {

            if (password.length < 8) {
                errors.push("passwords should contain more than 8 characters!")
            }

            if (!/\d/.test(password)) {
                errors.push('passwordwords should contain a number')
            }
            if (!/[a-z]/.test(password)) {
                errors.push('password should contain small letters')
            }
            if (!/[A-Z]/.test(password)) {
                errors.push('password should contain capital letters')
            }
            if (!/[^A-Za-z0-9]/g.test(password)) {
                errors.push('Password should include atleast one special character')
            }

        } else {
            errors.push("passwords must match and they can't be empty!")
        }

        if (errors.length) {
            res.send(errors.join('\n'))
        } else(next());
    },



}