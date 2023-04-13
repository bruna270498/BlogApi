const express = require('express');
const { postController } = require('../controller');
const tokenValid = require('../middlewares/validateToken');
const { emptyPost, categoryEmpty } = require('../middlewares/validatePost');

const routerPost = express.Router();
const validations = [tokenValid, emptyPost, categoryEmpty];

routerPost.post('/', validations, postController.newPost);

module.exports = routerPost;