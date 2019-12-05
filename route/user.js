const express = require('express');
const router = express.Router();
const userController = require('../controller/user');


const user = new userController();
router.get('/register', user.register);
router.get('/login', user.login);
router.get('/logout', user.logout);
router.get('/change-pwd', user.auth, user.changePwd);
router.get('/delete-user', user.auth, user.deleteUser);
router.get('/test', user.test);
router.get('/node', user.node);

module.exports = router;