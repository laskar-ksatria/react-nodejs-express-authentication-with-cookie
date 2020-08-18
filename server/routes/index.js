const express = require('express');
const Router = express.Router();
const UserController = require('../controllers/userController');
const { checkCookie } = require('../middlewares/auth');
//CSURFT;
const csurf = require('csurf');
const csurfProtection = csurf({ cookie: true, ignoreMethods: ['POST'] });

Router.post('/users/login',csurfProtection,UserController.login);
Router.get('/users/logout',checkCookie, UserController.logout);
Router.get('/users/checkauth',csurfProtection,checkCookie, UserController.checkAuth);


module.exports = Router;