const express = require('express');
const { postController } = require('../controller');
const tokenValid = require('../middlewares/validateToken');
const { emptyPost, 
    categoryEmpty, 
    postIdNull, 
    updatePostNull,
    userAutorization,
 } = require('../middlewares/validatePost');

const routerPost = express.Router();
const validations = [tokenValid, emptyPost, categoryEmpty];
const validatePut = [tokenValid, updatePostNull, userAutorization];

routerPost.post('/', validations, postController.newPost);
routerPost.get('/', tokenValid, postController.findAll);
routerPost.get('/:id', tokenValid, postIdNull, postController.findById);
routerPost.put('/:id', validatePut, postController.updatePost);

module.exports = routerPost;