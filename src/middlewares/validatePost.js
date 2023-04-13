const { Op } = require('sequelize');
const { Category } = require('../models');

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
module.exports = {
    emptyPost,
    categoryEmpty,
};