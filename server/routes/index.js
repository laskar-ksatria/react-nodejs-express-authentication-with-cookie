const express = require('express');
const Router = express.Router();
const UserController = require('../controllers/userController');
const { checkCookie } = require('../middlewares/auth')

Router.post('/users/login', UserController.login);
Router.get('/users/logout', checkCookie, UserController.logout);
Router.get('/users/checkauth', checkCookie, UserController.checkAuth)

module.exports = Router;