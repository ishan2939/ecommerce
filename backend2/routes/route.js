const express  = require('express');

const registerController = require('../controllers/signup');
const loginController = require('../controllers/login');
const auth = require('../middlewares/checkJWT');

const router = express.Router();

router.route('/signup').post(registerController.register);

router.route('/login').post(loginController.login);

router.route('/').get(auth, (req,res) => {
    res.status(200).send("Welcome ishan🙌");
});

module.exports = router;