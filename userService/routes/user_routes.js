const router = require('express').Router();
const { login, getUsers, registerUser, protectedRoute } = require('../controllers/userController');
const { validate, isHeanAdmin } = require('../middlewares/validate')

router.get('/', (req, res) => res.send('Welcome home!'))

router.post('/register', validate, registerUser);
router.post('/login', login);
router.post('/users', isHeanAdmin, getUsers);
router.post('/protected', protectedRoute);


module.exports = router;