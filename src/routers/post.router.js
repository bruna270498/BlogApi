const express = require('express');
const { postController } = require('../controller');
const tokenValid = require('../middlewares/validateToken');

const routerPost = express.Router();

routerPost.post('/', tokenValid, postController.newPost);

module.exports = routerPost;