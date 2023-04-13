const { Op } = require('sequelize');
const { Category, BlogPost } = require('../models');

const emptyPost = async (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    if (!title || !content || !categoryIds) {
        return res.status(400).json({
            message: 'Some required fields are missing' });
    }
    return next();
};
const categoryEmpty = async (req, res, next) => {
    const { categoryIds } = req.body;
    const categoriesId = await Category.findAll({ where: { id: { [Op.in]: categoryIds } } });
    if (categoriesId.length !== categoryIds.length) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
    return next();
};
const postIdNull = async (req, res, next) => {
    const { id } = req.params;
    const postId = await BlogPost.findByPk(id);
    if (!postId) {
        return res.status(404).json({
            message: 'Post does not exist' });
    }
    return next();
};
module.exports = {
    emptyPost,
    categoryEmpty,
    postIdNull,
};