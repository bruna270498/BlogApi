const express = require('express');
const { postController } = require('../controller');
const tokenValid = require('../middlewares/validateToken');
const { emptyPost, categoryEmpty, postIdNull } = require('../middlewares/validatePost');

const routerPost = express.Router();
const validations = [tokenValid, emptyPost, categoryEmpty];

routerPost.post('/', validations, postController.newPost);
routerPost.get('/', tokenValid, postController.findAll);
routerPost.get('/:id', tokenValid, postIdNull, postController.findById);

module.exports = routerPost;