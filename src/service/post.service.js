const { Op } = require('sequelize');
const { BlogPost, Category, PostCategory, User } = require('../models');

const postNew = async ({ title, content, categoryIds }, user) => {
    const categoriesId = await Category.findAll({ where: { id: { [Op.in]: categoryIds } } });
    const users = await User.findAll({ where: { email: user } });
    const userId = users[0].dataValues.id;
    const post = await BlogPost.create({ title, content, userId });
    await Promise.all(categoriesId.map(
        async ({ dataValues }) => PostCategory.create({ 
            postId: post.id, categoryId: dataValues.id }),
        ));
    return post;
};
module.exports = {
    postNew,
};