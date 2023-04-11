const express = require('express');
const { 
    validateName, 
    validateEmail, 
    emailExists, 
    validatePassword } = require('../middlewares/validateUser');

const { userController } = require('../controller');

const routerUser = express.Router();

const validation = [validateName, validateEmail, emailExists, validatePassword];

routerUser.post('/', validation, userController.newUser);

module.exports = routerUser;