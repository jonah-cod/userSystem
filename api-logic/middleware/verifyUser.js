module.exports = {
    verifyAdmin: async(req, res, next) => {
        let { id } = req.body;
        let user = await getmeAUser(id)
        if (user.role === 'admin') return next();
        res.status(401).send('unauthorised')
    }
}