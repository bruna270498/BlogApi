const express = require('express');
const { 
    validateName, 
    validateEmail, 
    emailExists, 
    validatePassword } = require('../middlewares/validateUser');
const tokenValid = require('../middlewares/validateToken');

const { userController } = require('../controller');

const routerUser = express.Router();

const validation = [validateName, validateEmail, emailExists, validatePassword];

routerUser.post('/', validation, userController.newUser);
routerUser.get('/', tokenValid, userController.findAll);
routerUser.get('/:id', tokenValid, userController.findById);

module.exports = routerUser;