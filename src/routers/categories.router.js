const express = require('express');
const { categoriesController } = require('../controller');
const validateName = require('../middlewares/validateCategory');
const tokenValid = require('../middlewares/validateToken');

const routerCategories = express.Router();

routerCategories.post('/', tokenValid, validateName, categoriesController.newCategorie);

module.exports = routerCategories;
