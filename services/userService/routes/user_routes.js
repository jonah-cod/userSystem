const router = require('express').Router();
const { login, getUsers, registerUser } = require('../controllers/userController');
const { validate } = require('../middlewares/validate')

router.get('/', (req, res) => res.send('Welcome home!'))

router.post('/register', validate, registerUser);
router.post('/login', login);
router.post('/users', getUsers);

module.exports = router;