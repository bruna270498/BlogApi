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
const findAllPost = async () => {
    const postAll = await BlogPost.findAll({ include: [{
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
    },
        { model: Category, as: 'categories', through: { attributes: [] } },
    ] });
    console.log(postAll);
    return postAll;
};
const findId = async (id) => {
    const postId = await BlogPost.findByPk(id, { include: [{
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
    },
        { model: Category, as: 'categories', through: { attributes: [] } },
    ] });
    return postId;
};
const postUpdate = async (id, { title, content }) => {
    const post = await BlogPost.findByPk(id, { include: [{
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
    },
        { model: Category, as: 'categories', through: { attributes: [] } },
    ] });
    post.title = title;
    post.content = content;
    const updatePost = await post.save();
    return updatePost;
};
module.exports = {
    postNew,
    findAllPost,
    findId,
    postUpdate,
};